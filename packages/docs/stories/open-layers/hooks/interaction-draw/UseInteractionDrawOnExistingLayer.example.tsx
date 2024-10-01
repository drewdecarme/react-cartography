import { Feature } from "ol";
import { GeoJSON } from "ol/format";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { OSM as SourceOSM } from "ol/source";
import { useEffect } from "react";
import {
  useInteractionDraw,
  useMapContext,
  useMapLayerTile,
} from "react-cartography/ol";

export default () => {
  const { ref, map } = useMapContext();

  const layer = useMapLayerTile(map, {
    className: "osm",
    source: new SourceOSM(),
  });

  const draw = useInteractionDraw(map, layer, "Polygon");

  // Once the draw instance becomes available (it will never change)
  // we're going to send an alert. As a bonus, we can then convert it
  // to GE
  useEffect(() => {
    if (!draw) return;
    console.log("The draw interaction is available... let's do stuff!");
    draw.on("drawend", (event) => {
      alert(
        "You just finished your drawing! The results of your feature are in the console."
      );
      const format = new GeoJSON();
      const geoJSONObject = format.writeFeatureObject(event.feature);

      // Output the GeoJSON to the console or use it as needed
      console.log("GeoJSON Object:", geoJSONObject);
      console.log("GeoJSON String:", JSON.stringify(geoJSONObject, null, 2));

      // at this point you can launch a modal or run a handler or whatever.
    });
  }, [draw]);

  // We're going to zoom into the white house so we can draw a box
  // around it
  useEffect(() => {
    if (!map) return;
    const view = map.getView();

    // these kinds of operations should most likely be put into a utility
    // to easily interface them. For example `getExtentFromLonLat`
    const whiteHouseCoordinates = fromLonLat([-77.0365, 38.8977]);
    const whiteHousePoint = new Point(whiteHouseCoordinates);
    const whiteHouseFeature = new Feature({
      geometry: whiteHousePoint,
    });
    const whiteHouseGeometry = whiteHouseFeature.getGeometry();
    if (!whiteHouseGeometry) return;
    const whiteHouseExtent = whiteHouseGeometry.getExtent();

    view.fit(whiteHouseExtent, {
      size: map.getSize(),
      padding: [50, 50, 50, 50],
      maxZoom: 18,
      duration: 2_000,
    });
  }, [map]);

  return <div ref={ref} className="map" />;
};
