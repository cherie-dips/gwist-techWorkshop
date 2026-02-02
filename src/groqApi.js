const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'  // Groq's API URL which is used to send the messages to the Groq API 

export async function sendMessage(messages) {
  const apiKey = import.meta.env._________   // import.meta.env is used to access the environment variables which is stored in the .env file. 
                                                     // Here it is Groq API Key.

  if (!apiKey) {
    throw new Error('VITE_GROQ_API_KEY is not set in environment variables')    // If the Groq API Key is not set in the environment variables, then throw an error.
  }

  const response = await fetch(GROQ_API_URL, {    // fetch is used to send the messages to the Groq API.
    method: '_____',                               // POST: is used to send the messages to the Groq API.
    headers: {                                    // headers: there are many headers in the API. Here we are using Content-Type and Authorization.
      'Content-Type': 'application/_____',         // Content-Type: is used to tell the API that the body of the request is in JSON format.
      'Authorization': `Bearer ${_____}`,         // Authorization: is used to tell the API that the request is authorized and bearer is apiKey.
    },
    body: JSON.stringify({
      model: '_____________',                // model: is used to tell the API that the model to be used is llama-3.1-8b-instant.
      messages: messages.map(msg => ({
        role: msg.role,                            // role: here role is user or assistant
        content: msg.content,                      // content: here content is the message that the user or assistant has sent.
      })),
      temperature: ____,                            // temperature is used to control the randomness of the response
    }),
  })

  if (!response.ok) {    // if the response is not ok, then throw an error.
    const error = await response.json().catch(() => ({ error: { message: 'Unknown error' } }))
    throw new Error(error.error?.message || `HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.choices[0]?.message?.content || 'No response received'
}