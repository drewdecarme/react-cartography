import { css } from "@linaria/core";
import { useMapContext, useMapLayerVectorTile } from "@react-cartography/ol";
import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";
import { getEnvVar } from "../../utils/util.getEnvVar";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export default function OpenLayersTileXYZ() {
  const { setMap, map } = useMapContext();

  useMapLayerVectorTile(map, {
    className: "vector-tiles",
    source: new VectorTileSource({
      format: new MVT(),
      url: `https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=${getEnvVar(
        "MAPBOX_TOKEN"
      )}`,
    }),
  });

  return <div ref={setMap} className={mapCSS} />;
}
