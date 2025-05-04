import Layout from "~/components/layout";
import type { Route } from "./+types/home";
import { LoginForm } from "~/components/loginForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <LoginForm></LoginForm>
    </Layout>
  );
}
