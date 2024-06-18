'use server'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function createToken(token: string) {
  cookies().set('token', token)
}

export async function deleteCookie(cookie: string){
  cookies().delete(`${cookie}`)
}

export async function revalidatePosts(){
  revalidateTag('posts')
}

export async function redirectToLogin(){
  redirect("/")
}