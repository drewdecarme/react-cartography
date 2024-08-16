import { css } from "@linaria/core";
import { useMapContext, useMapLayerTile } from "@react-cartography/ol";
import OlSourceXYZ from "ol/source/XYZ";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export default function OpenLayersTileXYZ() {
  const { ref, map } = useMapContext();

  useMapLayerTile(map, {
    className: "open-street-map",
    source: new OlSourceXYZ({
      url: "https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png",
    }),
  });

  return <div ref={ref} className={mapCSS} />;
}
