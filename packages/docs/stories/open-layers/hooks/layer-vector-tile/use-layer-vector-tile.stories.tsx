import type { Meta } from "@storybook/react";
import UseLayerVectorSourceMVTExample from "./UseLayerVectorSourceMVT.example";

const meta: Meta = {
  title: "OpenLayers / Hooks / useLayerVectorTile",
} satisfies Meta<typeof meta>;

export default meta;

export const SourceMVT = UseLayerVectorSourceMVTExample;
