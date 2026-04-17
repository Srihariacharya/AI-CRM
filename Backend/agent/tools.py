from agent.llm import call_llm

def extract_entities(text):
    prompt = f"""
    Extract structured CRM data from:
    {text}

    Return JSON with:
    hcp_name, interaction_type, sentiment, follow_up, product
    """
    return call_llm(prompt)


def log_interaction_tool(state):
    data = state["data"]
    # Save to DB (mock for now)
    print("Saving:", data)
    return {"status": "logged", "data": data}


def edit_interaction_tool(state):
    print("Editing record:", state)
    return {"status": "edited"}