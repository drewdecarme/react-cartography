import { css } from "@linaria/core";
import { useMapContext, useMapLayerVector } from "@react-cartography/ol";

const mapCSS = css`
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  position: relative;
`;

export default function OpenLayersVectorImages() {
  const { ref, map } = useMapContext();

  useMapLayerVector(map, {
    className: "vector",
  });

  return <div ref={ref} className={mapCSS} />;
}
