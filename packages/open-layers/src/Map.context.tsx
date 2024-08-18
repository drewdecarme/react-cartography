import React, { RefCallback } from "react";
import { type ReactNode, useMemo } from "react";
import { useMap, UseMapOptions } from "./map.useMap";
import { Map } from "ol";

export type MapContextType<T extends HTMLElement = HTMLElement> = {
  map: Map | undefined;
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
