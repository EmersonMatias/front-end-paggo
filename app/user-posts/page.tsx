'use client'

import axios, { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

type Post = {
    id: number;
    urlImage: string;
    text: string;
    userId: number;
}

type UserData = {
    id: number,
    email: string,
    name: string,
    posts: Post[]
}

export default function UserPosts() {
    const { data: session } = useSession()
    const [posts, setPosts] = useState<UserData>()



    useEffect(() => {
        async function getPosts() {
            try{
                const response: AxiosResponse<UserData> = await axios.get("http://localhost:3005/posts", { headers: { "Authorization": `Bearer: ${session?.userToken}` } })
                setPosts(response.data)
            }catch(error){
                console.log(error)
            }
            
        }

        getPosts()
    },[session])

   console.log(posts)
    return (
        <section className="flex flex-col items-center py-10 gap-5">
         {posts && posts.posts.map(({text,urlImage,id}) => (
              <div className="bg-gray-500 w-[600px] rounded-lg flex flex-col items-center p-10" key={id}>
              <img src={`${urlImage}`} className="w-full h-auto mb-5" alt={text}/>
              <p>{text}</p>
         </div>
         ))}
        </section>
    )
}