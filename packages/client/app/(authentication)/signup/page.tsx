"use client"

import React from "react"
import { Metadata, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

const formSchema = z.object({
  username: z.string().min(3).max(48),
  email: z.string().email(),
  password: z.string().min(8).max(4096),
})

export default function LoginPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    router.push("/dashboard")
  }

  return (
    <div className="flex h-screen max-h-full w-screen">
      <div className="grid h-screen max-h-full w-[100%] place-items-center border-r-[1px] bg-secondary px-4 text-card-foreground shadow-sm sm:w-[32rem]">
        <div className="w-[90%] items-center justify-start sm:w-96">
          <Card className="w-[100%]">
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input type="username" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
              </Form>
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