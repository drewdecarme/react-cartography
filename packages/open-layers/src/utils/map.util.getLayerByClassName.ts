import BaseLayer from "ol/layer/Base";
import { type Map } from "ol";

/**
 * Loops through all of the layers of a map and attempts to match
 * the layers to the className provided in the options. If it doesn't
 * find the layer it will return undefined.
 */
export const getLayerByClassName = <T extends BaseLayer>(
  map: Map | undefined,
  options: { className: string }
): T | undefined => {
  if (!map) return undefined;

  const layers = map.getLayers().getArray();

  const layer = layers.find((layer) => {
    const className = layer.getClassName();
    return className === options.className;
  });

  return layer as T;
};
