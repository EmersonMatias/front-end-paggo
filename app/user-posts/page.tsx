import { AxiosResponse } from "axios";
import { getUserData } from "./request";

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

export default async function UserPosts() {
 const posts: Promise<UserData> = await getUserData()
  
    return (
        <section className="flex flex-col items-center py-10 gap-5">
         {posts && (await posts).posts.map(({text,urlImage,id}) => (
              <div className="bg-gray-500 w-[600px] rounded-lg flex flex-col items-center p-10" key={id}>
              <img src={`${urlImage}`} className="w-full h-auto mb-5"  alt={text}/>
              <p>{text}</p>
         </div>
         ))}
        </section>
    )
}