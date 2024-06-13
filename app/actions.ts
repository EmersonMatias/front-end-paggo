'use server'
import { cookies } from 'next/headers'
 
export async function createToken(token: string) {
  cookies().set('token', token)

}