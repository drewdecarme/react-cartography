import { RefCallback, useCallback, useState } from "react";
import { Map, View } from "ol";
import { defaults as ControlDefaults } from "ol/control";
import { defaults as InteractionDefaults } from "ol/interaction";

export type UseMapOptions = {
  interactionOptions?: typeof InteractionDefaults;
  controlOptions?: typeof ControlDefaults;
  viewOptions?: typeof View;
};

export const useMap = <T extends HTMLElement>(options?: UseMapOptions) => {
  const [map, setMapState] = useState<Map | undefined>(undefined);

  /**
   * Due to SSR restrictions and the document not existing, we need to use a
   * getter to always return the value of the ref. If the mapRef doesn't exist,
   * then we create it and set it to the ref and then return the ref. If it does
   * exist, then we just return the ref.
   *
   * This is a pattern in order to get a complex singleton in React.
   */

  const ref = useCallback<RefCallback<T>>(
    (node) => {
      if (!node) return;
      setMapState(
        new Map({
          interactions: InteractionDefaults({
            altShiftDragRotate: false,
            shiftDragZoom: false,
            pinchRotate: false,
            pinchZoom: true,
            onFocusOnly: true,
            doubleClickZoom: true,
            dragPan: true,
            keyboard: false,
            mouseWheelZoom: true,
            ...options?.interactionOptions,
          }),
          controls: ControlDefaults({
            attribution: true,
            attributionOptions: {
              collapsible: true,
              collapsed: true,
            },
            rotate: false,
            zoom: true,
            ...options?.controlOptions,
          }),
          layers: [],
          view: new View({
            showFullExtent: true,
            projection: "EPSG:3857",
            constrainRotation: false,
            enableRotation: true,
            smoothExtentConstraint: true,
            smoothResolutionConstraint: true,
            // center: [-10854247, 4684460], // Roughly the center of the united states
            center: [0, 0],
            zoom: 2,
            ...options?.viewOptions,
          }),
          target: node,
        })
      );
    },
    [
      options?.controlOptions,
      options?.interactionOptions,
      options?.viewOptions,
      setMapState,
    ]
  );

  return { map, ref };
};
