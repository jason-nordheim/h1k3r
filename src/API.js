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


export const SignInUser = (username, password) => {
  
};
