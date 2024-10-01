import type { Map as OlMap } from "ol";
import type { FeatureLike } from "ol/Feature";
import VectorTileLayer, { type Options } from "ol/layer/VectorTile";
import type RenderFeature from "ol/render/Feature";
import type VectorTileSource from "ol/source/VectorTile";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";

// export type UseMapLayerVectorTileOptions<
//   F extends FeatureLike,
//   V extends VectorTileSource<F>
// > = Options<V, F> & {
//   /**
//    * The name of the layer. This will be set to the
//    * className of the layer inside of the map.
//    */
//   className: string;
// };

/**
 * Docs: https://docs.mapbox.com/data/tilesets/guides/vector-tiles-introduction/
 */
export const useMapLayerVectorTile = <
  V extends VectorTileSource<F>,
  F extends FeatureLike = RenderFeature
>(
  map: OlMap | undefined,
  options: Options<V, F>
) => {
  const initLayerRef = useRef(new VectorTileLayer<V, F>(options));

  /**
   * Get and/or add the layer to the map
   */
  const layer = useMapGetLayer(map, {
    initLayer: initLayerRef.current,
  });

  return layer;
};
