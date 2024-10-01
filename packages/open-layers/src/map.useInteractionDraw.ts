import type { Map as OLMap } from "ol";
import Draw, { type Options } from "ol/interaction/Draw";
import type TileLayer from "ol/layer/Tile";
import { useEffect, useRef, useState } from "react";

export function useInteractionDraw<T extends TileLayer>(
  map: OLMap | undefined,
  layer: T,
  type: Options["type"],
  options?: Omit<Options, "type">
) {
  const drawRef = useRef(new Draw({ type, ...(options ?? {}) }));
  const [interaction, setInteraction] = useState<Draw | undefined>(undefined);

  useEffect(() => {
    const layerSource = layer.getSource();
    if (!layerSource || !map) return;

    setInteraction(drawRef.current);
    console.log("adding draw");
    map.addInteraction(drawRef.current);

    return () => {
      if (!drawRef.current) return;
      console.log("removing draw");
      map.removeInteraction(drawRef.current);
    };
  }, [map, layer]);

  return interaction;
}
