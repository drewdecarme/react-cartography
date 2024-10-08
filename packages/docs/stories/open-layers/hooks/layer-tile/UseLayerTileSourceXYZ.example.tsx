import { XYZ as SourceXYZ } from "ol/source";
import { useMapContext, useMapLayerTile } from "react-cartography/ol";

export default () => {
  const { ref, map } = useMapContext();

  const layer = useMapLayerTile(map, {
    className: "xyz",
    source: new SourceXYZ({
      url: "https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png",
    }),
  });

  return <div ref={ref} className="map" />;
};
