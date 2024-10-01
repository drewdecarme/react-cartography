import { MVT as FormatMVT } from "ol/format";
import { VectorTile as SourceVectorTile } from "ol/source";
import { useMapContext, useMapLayerVectorTile } from "react-cartography/ol";

export default () => {
  const { ref, map } = useMapContext();

  useMapLayerVectorTile(map, {
    className: "vector-tiles",
    source: new SourceVectorTile({
      format: new FormatMVT(),
      url: "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiZHJld2RlY2FybWVwZXJzb25hbCIsImEiOiJjbHp2NXNjeWwwMjAyMnFvZHlpNmo3emRzIn0.gOxJlDUVvc8K3ezaBuiDPQ",
    }),
  });

  return <div ref={ref} className="map" />;
};
