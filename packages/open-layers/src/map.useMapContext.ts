import { useContext } from "react";
import { MapContext, type MapContextType } from "./Map.context";

export const useMapContext = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error(
      "'useMapContext()' must be used within a <MapProvider /> component"
    );
  }
  return context;
};
