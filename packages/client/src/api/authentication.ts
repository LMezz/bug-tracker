import { SignupInfo } from "@/types/authentication";
import axios from "axios"

const apiUrl: string = process.env.NEXT_PUBLIC_API_URL!

export function createUser(jwt: string, info: SignupInfo) {
  let { password, ...rest } = info
  const data = {
    jwt,
    ...rest,
  }
  axios.post(`${apiUrl}/api/users`, data).catch((error: any) => {
    console.log(error)
  })
  }
