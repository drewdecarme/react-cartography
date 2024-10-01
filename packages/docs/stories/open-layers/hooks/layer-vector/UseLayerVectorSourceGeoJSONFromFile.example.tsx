import format from "ol/format";
import source from "ol/source";
import { useMapContext, useMapLayerVector } from "react-cartography/ol";
import geoJsonData from "./vector-geojson.data.json";

export default () => {
  const { ref, map } = useMapContext();

  useMapLayerVector(map, {
    className: "geo-json-from-file",
    source: new source.Vector({
      features: new format.GeoJSON({
        featureProjection: "EPSG:3857", // All feature should be projected as Spherical Mercator (EPSG:3857)
        dataProjection: "EPSG:4326",
      }).readFeatures(geoJsonData),
    }),
  });

  return <div ref={ref} className="map" />;
};
