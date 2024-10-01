import type { Map as OLMap } from "ol";
import Draw, { type Options } from "ol/interaction/Draw";
import type TileLayer from "ol/layer/Tile";
import { useEffect, useMemo, useState } from "react";

export function useInteractionDraw<T extends TileLayer>(
  map: OLMap | undefined,
  layer: T,
  type: Options["type"],
  options?: Omit<Options, "type">
) {
  const memoOptions = useMemo(() => options, [options]);
  const [interaction, setInteraction] = useState<Draw | undefined>();

  useEffect(() => {
    const layerSource = layer.getSource();
    if (!layerSource || !map) return;

    const draw = new Draw({ type, ...(memoOptions ?? {}) });
    setInteraction(draw);
    console.log("adding draw");
    map.addInteraction(draw);

    return () => {
      if (!draw) return;
      console.log("removing draw");
      map.removeInteraction(draw);
    };
  }, [map, layer, memoOptions, type]);

  return interaction;
}
