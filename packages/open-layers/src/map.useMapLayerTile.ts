import { type Map } from "ol";
import LayerTile from "ol/layer/Tile";
import SourceTile from "ol/source/Tile";
import { useRef } from "react";
import { useMapGetLayer } from "./map.useMapGetLayer";
import { Options as BaseTileOptions } from "ol/layer/BaseTile";

export type UseMapLayerTileOptions<T extends SourceTile> =
  BaseTileOptions<T> & {
    /**
     * The name of the layer. This will be set to the
     * className of the layer inside of the map.
     */
    className: string;
  };

export const useMapLayerTile = <T extends SourceTile>(
  map: Map | undefined,
  options: UseMapLayerTileOptions<T>
) => {
  const initLayerRef = useRef(new LayerTile<T>(options));

  /**
   * Get and/or add the layer to the map
   */
  const layer = useMapGetLayer(map, {
    initLayer: initLayerRef.current,
  });

  return layer;
};
