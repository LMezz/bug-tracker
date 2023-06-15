"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignupForm from "@/components/authentication/signup-form"

export default function LoginPage() {
  return (
    <div className="flex h-screen max-h-full w-screen">
      <div className="bg-secondary text-card-foreground grid h-screen max-h-full w-[100%] place-items-center border-r-[1px] px-4 shadow-sm sm:w-[32rem]">
        <div className="w-[90%] items-center justify-start sm:w-96">
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
            {/* <CardFooter>
            </CardFooter> */}
          </Card>
          <div className="mt-4 flex w-[90%] items-center justify-start gap-2 pl-2">
            <p className="text-sm/[12px]">Already have an account?</p>
            <Link href="/login" className="text-sm/[12px] text-blue-400">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
