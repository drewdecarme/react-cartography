import { json, type MetaFunction } from "@remix-run/cloudflare";
import { Hero } from "../components/Hero";
import { codeToHtml } from "shiki";
import Example from "../examples/open-layers.layer-tile.osm";
import { PageSection } from "../components/PageSection";

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
<PageSection
        title="If you know hooks, you know maps"
        subTitle="React Cartography supplies hooks that interface the imperative APIs of modern open source mapping libraries. Simply import the hooks and supply some options to get your maps up and running."
      >
test
</PageSection>
</>
);
}
