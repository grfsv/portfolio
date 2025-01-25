import type { Route } from "./+types/home";
import {Template} from "../template/template"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "portfolio" },
    { name: "description", content: "grfsv's portfolio" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return <Template />;
}
