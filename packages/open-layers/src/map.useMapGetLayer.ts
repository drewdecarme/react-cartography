import { type Map } from "ol";
import BaseLayer from "ol/layer/Base";
import { useCallback, useRef } from "react";
import { getLayerByClassName } from "./utils/map.util.getLayerByClassName";

/**
 * A hook that returns a layer on a map by it's className. If the hook finds the
 * layer already in the map, it will return that specific layer instance. If
 * it doesn't find it, this hook will add it to the map and then return the
 * reference.
 *
 * This hook will always return an instance of a layer.
 */
export const useMapGetLayer = <T extends BaseLayer>(
  map: Map | undefined,
  options: { initLayer: T }
) => {
  const layerRef = useRef<T>(options.initLayer);

  const getLayer = useCallback(() => {
    if (!map) return layerRef.current;

    const className = layerRef.current.getClassName();

    if (!className) {
      throw new Error(
        "Layer does not have a className. Unable to locate layer instance."
      );
    }

    const mapLayer = getLayerByClassName<T>(map, {
      className,
    });

    if (!mapLayer) {
      map.addLayer(layerRef.current);
      return layerRef.current;
    }
    return mapLayer;
  }, [map]);

  return getLayer();
};
