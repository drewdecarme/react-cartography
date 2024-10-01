import type { Meta } from "@storybook/react";
import UseLayerVectorSourceGeoJSONFromFile from "./UseLayerVectorSourceGeoJSONFromFile.example";
import UseLayerVectorSourceGeoJSONFromUrlExample from "./UseLayerVectorSourceGeoJSONFromUrl.example";

const meta: Meta = {
  title: "OpenLayers / Hooks / useLayerVector",
} satisfies Meta<typeof meta>;

export default meta;

export const SourceGeoJSONFromFile = UseLayerVectorSourceGeoJSONFromFile;
export const SourceGeoJSONFromURL = UseLayerVectorSourceGeoJSONFromUrlExample;
