import { json, type MetaFunction } from "@remix-run/cloudflare";
import { Hero } from "../components/Hero";
import { codeToHtml } from "shiki";
import Example from "../examples/open-layers.layer-tile.osm";

export const meta: MetaFunction = () => {
  return [
    { title: "React Cartography" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export const loader = async () => {
  const highlightedCode = await codeToHtml(Example.toString(), {
    lang: "typescript",
    theme: "dark-plus",
  });
  return json({ highlightedCode });
};

export default function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
