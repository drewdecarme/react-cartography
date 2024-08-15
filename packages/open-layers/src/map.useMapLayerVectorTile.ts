import { type Map } from "ol";
import type VectorTileSource from "ol/source/VectorTile";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";
import type { FeatureLike } from "ol/Feature";
import VectorTileLayer, { Options } from "ol/layer/VectorTile";

export type UseMapLayerVectorTileOptions<
  F extends FeatureLike,
  V extends VectorTileSource<F>
> = Options<V> & {
  /**
   * The name of the layer. This will be set to the
   * className of the layer inside of the map.
   */
  className: string;
};

/**
 * Docs: https://docs.mapbox.com/data/tilesets/guides/vector-tiles-introduction/
 */
export const useMapLayerVectorTile = <
  F extends FeatureLike,
  V extends VectorTileSource<F>
>(
  map: Map | undefined,
  options: UseMapLayerVectorTileOptions<F, V>
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
