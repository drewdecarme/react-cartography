import type { Meta } from "@storybook/react";
import UseInteractionDrawOnExistingLayer from "./UseInteractionDrawOnExistingLayer.example";

const meta: Meta = {
  title: "OpenLayers / Hooks / useInteractionDraw",
} satisfies Meta<typeof meta>;

export default meta;

export const OnExistingLayer = UseInteractionDrawOnExistingLayer;
