import type { Map as OlMap } from "ol";
import type { FeatureLike } from "ol/Feature";
import type { Options } from "ol/layer/BaseVector";
import VectorLayer from "ol/layer/Vector";
import type VectorSource from "ol/source/Vector";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";

export type UseMapLayerVectorOptions<
  F extends FeatureLike,
  V extends VectorSource<F>
> = Options<F, V> & {
  /**
   * The name of the layer. This will be set to the
   * className of the layer inside of the map.
   */
  className: string;
};

export const useMapLayerVector = <F extends FeatureLike>(
  map: OlMap | undefined,
  options: UseMapLayerVectorOptions<F, VectorSource<F>>
) => {
  const initLayerRef = useRef(new VectorLayer<VectorSource<F>, F>(options));

  /**
   * Get and/or add the layer to the map
   */
  const layer = useMapGetLayer(map, {
    initLayer: initLayerRef.current,
  });

  return layer;
};
