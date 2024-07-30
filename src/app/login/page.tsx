"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from 'zod'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoginForm from "./components/LoginForm";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});


export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Login</h1>
        <LoginForm />
        <div className="flex gap-1 text-sm">
          <p>{"Don't have an account?"}</p>
          <a href="/register" className="">Register</a>
        </div>
      </div>
    </div>
  );
}