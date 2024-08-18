import {
  MapProvider,
  useMapContext,
  useMapLayerTile,
} from "@react-cartography/ol";
import { ReactNode } from "react";
import SourceXYZ from "ol/source/XYZ";
import React from "react";

function MapWrapper(props: { children: ReactNode }) {
  return <MapProvider>{props.children}</MapProvider>;
}

function Map() {
  const { ref, map } = useMapContext();

  useMapLayerTile(map, {
    className: "background",
    source: new SourceXYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    }),
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        background: "#f8f8f8",
      }}
    />
  );
}

export default function Example() {
  return (
    <MapWrapper>
      <Map />
    </MapWrapper>
  );
}
