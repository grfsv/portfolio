import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Your Name" },
    { name: "description", content: "フルスタックエンジニアのポートフォリオサイト" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
