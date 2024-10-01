import type { Map as OlMap } from "ol";
import React, { type RefCallback } from "react";
import { type ReactNode, useMemo } from "react";
import { type UseMapOptions, useMap } from "./map.useMap";

export type MapContextType<T extends HTMLElement = HTMLElement> = {
  map: OlMap | undefined;
  ref: RefCallback<T>;
};
export const MapContext = React.createContext<MapContextType | null>(null);
export type MapProviderProps = {
  children: ReactNode;
  options?: UseMapOptions;
};
export function MapProvider<T extends HTMLElement>({
  children,
  options,
}: MapProviderProps) {
  const { map, ref } = useMap<T>(options);

  const value = useMemo(
    () => ({
      map,
      ref,
    }),
    [map, ref]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}
