import { GeoJSON as FormatGeoJSON } from "ol/format";
import { Vector as SourceVector } from "ol/source";
import { useMapContext, useMapLayerVector } from "react-cartography/ol";

export default () => {
  const { ref, map } = useMapContext();

  useMapLayerVector(map, {
    className: "geo-json-from-url",
    background: "#1a2b39",
    source: new SourceVector({
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: new FormatGeoJSON(),
    }),
    style: {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
    },
  });

  return <div ref={ref} className="map" />;
};
