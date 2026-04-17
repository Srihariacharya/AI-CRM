from groq import Groq

client = Groq(api_key="YOUR_GROQ_API_KEY")

def call_llm(prompt):
    response = client.chat.completions.create(
        model="gemma2-9b-it",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content