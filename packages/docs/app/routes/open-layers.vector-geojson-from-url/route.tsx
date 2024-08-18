import { css } from "@linaria/core";
import { useMapContext, useMapLayerVector } from "@react-cartography/ol";
import VectorSource from "ol/source/Vector";
import GEOJsonFormat from "ol/format/GeoJSON";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export default function OpenLayersVectorGeoJSONFromURL() {
  const { ref, map } = useMapContext();

  useMapLayerVector(map, {
    className: "vector",
    background: "#1a2b39",
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new GEOJsonFormat(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });

  return <div ref={ref} className={mapCSS} />;
}
