// components/LoginForm.tsx
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { Form } from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { InputField } from "./inputForm";
import { Checkbox } from "./ui/checkbox";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    toast("Login Submitted", {
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <Toaster />
      <div className="w-2/3 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              control={form.control}
              name="email"
              label="Email"
              placeholder="you@example.com"
            />
            <InputField
              control={form.control}
              name="password"
              label="Password"
              placeholder="********"
            />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button type="submit">Login</Button>
            <p className="text-sm">
              Already have account?{" "}
              <a className="hover:underline" href="#">
                Sign in here
              </a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
