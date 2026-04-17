from langgraph.graph import StateGraph
from agent.tools import extract_entities, log_interaction_tool, edit_interaction_tool

def entity_node(state):
    text = state["input"]
    extracted = extract_entities(text)
    return {"data": extracted}


def decision_node(state):
    if "edit" in state["input"].lower():
        return "edit"
    return "log"


graph = StateGraph()

graph.add_node("extract", entity_node)
graph.add_node("log", log_interaction_tool)
graph.add_node("edit", edit_interaction_tool)

graph.set_entry_point("extract")

graph.add_edge("extract", "log")

app = graph.compile()