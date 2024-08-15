import { type Map } from "ol";
import VectorLayer from "ol/layer/Vector";
import type VectorSource from "ol/source/Vector";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";
import type { Options as BaseVectorOptions } from "ol/layer/BaseVector";
import type { FeatureLike } from "ol/Feature";

export type UseMapLayerVectorOptions<
  F extends FeatureLike,
  V extends VectorSource<F>
> = BaseVectorOptions<F, V> & {
  /**
   * The name of the layer. This will be set to the
   * className of the layer inside of the map.
   */
  className: string;
};

export const useMapLayerVector = <
  F extends FeatureLike,
  V extends VectorSource<F>
>(
  map: Map | undefined,
  options: UseMapLayerVectorOptions<F, V>
) => {
  const initLayerRef = useRef(new VectorLayer<V, F>(options));

  /**
   * Get and/or add the layer to the map
   */
  const layer = useMapGetLayer(map, {
    initLayer: initLayerRef.current,
  });

  return layer;
};
