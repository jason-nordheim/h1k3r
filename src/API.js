const API_URL = "http://localhost:4000"

const post = async (path, payload, authentication) => {
  return await fetch(API_URL + path, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(payload)
  })
}

export const SignInUser = (username, password) => {};
