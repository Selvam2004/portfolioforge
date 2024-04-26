import { NextResponse } from 'next/server'
import { createUser,getUserByEmail, getUserById, updateUser, deleteUser } from '@/app/api/profile/code';
type Params = {
    username: string
  }
  
   
  export async function GET(request: Request,context: { params: Params }) {
    
    let res=context.params.username;
    console.log("hai post",res);
    const response =
    await getUserByEmail(res);
  console.log("hai")
    return NextResponse.json(
      {data:response}
    )
  }