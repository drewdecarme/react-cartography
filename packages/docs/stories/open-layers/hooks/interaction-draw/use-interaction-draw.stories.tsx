import type { Meta } from "@storybook/react";
import UseInteractionDrawExample from "./UseInteractionDraw.example";

const meta: Meta = {
  title: "OpenLayers / Hooks / useInteractionDraw",
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = UseInteractionDrawExample;
