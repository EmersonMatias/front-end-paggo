import { cookies } from "next/headers"

export async function getUserData() {
    const userToken = cookies()?.get("token")
    const res = await fetch("http://localhost:3005/posts",  {next: {tags: ['posts']}, headers: { "Authorization": `Bearer: ${userToken!?.value}` } })
    
    if (!res.ok) {
       return null
    }
     
    return res.json()
  }