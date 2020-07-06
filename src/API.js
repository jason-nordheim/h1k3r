const API_URL = "http://localhost:4000"

const post = async (path, payload) => {
  return await fetch(API_URL + path, {
    method: "POST", 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(payload)
  })
}
const authPost = async (path, payload, token) => {
  return await fetch(API_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}
const get = async (path) => {
  return await fetch(API_URL + path, {
    method: "GET",
    headers: { method: "GET", "Content-Type": "application/json" },
  });
}
const authGet = async (path, token) => {
  await fetch(API_URL + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    }
  });
}


export const registerUser = async (first, last, username, password, email, bio) => {
  const payload = { first, last, username, password, email, bio }
  const response = await post('/register', payload)
  return await response.json() 
}

export const loginUser = async (username, password) => {
  const payload = { username, password } 
  const response = await post('/login', payload)
  return await response.json() 
}