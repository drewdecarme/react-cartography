import React from "react";
import { type ReactNode, useMemo } from "react";
import { useMap, UseMapOptions } from "./map.useMap";
import { Map } from "ol";

export type MapContextType = {
  map: Map;
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
  const { map, setMap } = useMap<T>(options);

  const value = useMemo(
    () => ({
      map: map.current,
      setMap,
    }),
    [map, setMap]
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}
