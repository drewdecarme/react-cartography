import format from "ol/format";
import source from "ol/source";
import { useMapContext, useMapLayerVector } from "react-cartography/ol";
import geoJsonData from "./vector-geojson.data.json";

export default () => {
  const { ref, map } = useMapContext();

  useMapLayerVector(map, {
    className: "geo-json-from-file",
    background: "#1a2b39",
    source: new source.Vector({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new format.GeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });

  return <div ref={ref} className="map" />;
};
