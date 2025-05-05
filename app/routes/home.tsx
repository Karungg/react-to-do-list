import Layout from "~/components/layout";
import type { Route } from "./+types/home";
import { LoginForm } from "~/components/loginForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "To Do List" },
    { name: "description", content: "To Do List App" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <LoginForm></LoginForm>
    </Layout>
  );
}
