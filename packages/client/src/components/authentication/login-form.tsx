import { useState } from "react"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  // FormDescription,
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
  email: z.string({
    required_error: "EMail is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1)
    .max(4096),
})

export default function LoginForm() {
  const router = useRouter()
  const [incorrect, setIncorrect] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const { login } = useAuth()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!login) return
    try {
      setIncorrect(false)
      await login({ email: values.email, password: values.password })
      router.push("/dashboard")
    } catch (err) {
      setIncorrect(true)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          <Button type="submit">Log In</Button>
        </form>
      </Form>
      {incorrect ? (
        <p className="text-destructive pt-1 text-sm">
          Incorrect email or password
        </p>
      ) : (
        <></>
      )}
    </>
  )
}
