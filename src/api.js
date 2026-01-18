const API_BASE = "https://askdinesh-ai.onrender.com";

export async function askAgent(question, module = "All") {
  const response = await fetch(`${API_BASE}/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      module
    })
  });

  if (!response.ok) {
    throw new Error("Backend error");
  }

  return response.json();
}
