import { css } from "@linaria/core";
import {
  useMapContext,
  useMapLayerTile,
  useMapLayerVector,
} from "@react-cartography/ol";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import geoJsonData from "./vector-geojson.data.json";
import { XYZ } from "ol/source";
import { createHandle } from "../../utils/createHandle";
import { useEffect } from "react";
import { MetaFunction } from "@remix-run/cloudflare";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export const meta: MetaFunction = () => {
  return [{ title: "Vector Layer GeoJSON | Open Layers | React Cartography" }];
};

export const handle = createHandle({
  title: "Layer - Vector",
  subTitle: "Imports a GeoJSON file and renders the feature collection",
  description: (
    <div>
      <p>
        This example uses 2 layers to create a map that displays the open street
        map and then a second hook <code>useMapLayerVector</code> to display the
        GeoJSON data imported from the data file.
      </p>
      <p>
        It&apos;s important to note that you need to always include the type of
        projection that the data is in and then also provide the projection that
        your view has otherwise open layers won&apos;t understand how to render
        the GeoJSON feature collection properly.
      </p>
    </div>
  ),
});

export default function OpenLayersVectorGeoJSONFromFile() {
  const { ref, map } = useMapContext();

  // once the map becomes available, zoom into the US
  useEffect(() => {
    if (!map) return;
    const view = map.getView();

    view.animate({
      zoom: 4,
      // Roughly the center of the united states
      center: [-10854247, 4684460],
    });
  }, [map]);

  // add a background
  useMapLayerTile(map, {
    className: "background",
    source: new XYZ({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    }),
  });

  // add the json data and project it
  useMapLayerVector(map, {
    className: "vector",
    source: new VectorSource({
      features: new GeoJSON({
        // All feature should be projected as Spherical Mercator (EPSG:3857)
        featureProjection: "EPSG:3857",
        dataProjection: "EPSG:4326",
      }).readFeatures(geoJsonData),
    }),
  });

  return <div ref={ref} className={mapCSS} />;
}
