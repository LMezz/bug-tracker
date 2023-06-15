"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from "@/components/authentication/login-form"

export default function LoginPage() {
  return (
    <div className="flex h-screen max-h-full w-screen">
      <div className="bg-secondary text-card-foreground grid h-screen max-h-full w-[100%] place-items-center border-r-[1px] px-4 shadow-sm sm:w-[32rem]">
        <div className="w-[90%] items-center justify-start sm:w-96">
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle>Welcome back!</CardTitle>
              <CardDescription>
                Report, track, and resolve bugs in development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter>
              <Link
                href="/forgot-password"
                className="text-sm/[12px] text-blue-400"
              >
                Forgot password?
              </Link>
            </CardFooter>
          </Card>
          <div className="mt-4 flex w-[90%] items-center justify-start gap-2 pl-2">
            <p className="text-sm/[12px]">Not registered yet?</p>
            <Link href="/signup" className="text-sm/[12px] text-blue-400">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
