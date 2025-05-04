import Layout from "~/components/layout";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { InputForm } from "~/components/inputForm";
import { Toaster } from "sonner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <InputForm />
      <Button>Login</Button>
      <Toaster />
    </Layout>
  );
}
