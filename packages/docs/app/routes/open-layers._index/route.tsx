import { css } from "@linaria/core";
import { useMapContext, useMapLayerTile } from "@react-cartography/ol";
import OlSourceXYZ from "ol/source/XYZ";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export default function OpenLayersIndex() {
  const { ref, map } = useMapContext();

  useMapLayerTile(map, {
    className: "background",
    source: new OlSourceXYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    }),
  });

  return <div ref={ref} className={mapCSS} />;
}
