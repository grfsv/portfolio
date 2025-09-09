import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "ポートフォリオサイト" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
