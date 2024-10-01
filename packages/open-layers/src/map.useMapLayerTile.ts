import type { Map as OlMap } from "ol";
import type { Options } from "ol/layer/BaseTile";
import TileLayer from "ol/layer/Tile";
import type TileSource from "ol/source/Tile";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";

export type UseMapLayerTileOptions<T extends TileSource> = Options<T> & {
  /**
   * The name of the layer. This will be set to the
   * className of the layer inside of the map.
   */
  className: string;
};

export const useMapLayerTile = <T extends TileSource>(
  map: OlMap | undefined,
  options: UseMapLayerTileOptions<T>
) => {
  const initLayerRef = useRef(new TileLayer<T>(options));

  /**
   * Get and/or add the layer to the map
   */
  const layer = useMapGetLayer(map, {
    initLayer: initLayerRef.current,
  });

  return layer;
};
