import format from "ol/format";
import source from "ol/source";
import { useMapContext, useMapLayerVectorTile } from "react-cartography/ol";

export default () => {
  const { ref, map } = useMapContext();

  useMapLayerVectorTile(map, {
    className: "vector-tiles",
    source: new source.VectorTile({
      format: new format.MVT(),
      url: `https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=${getEnvVar(
        "MAPBOX_TOKEN"
      )}`,
    }),
  });

  return <div ref={ref} className="map" />;
};
