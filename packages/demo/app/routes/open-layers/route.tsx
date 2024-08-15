import { css } from "@linaria/core";
import { MapProvider } from "@react-cartography/ol";
import { Link, Outlet } from "@remix-run/react";

const layoutCSS = css`
  height: 100%;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 300px) 1fr minmax(
      min-content,
      300px
    );
  grid-template-rows: 1fr minmax(min-content, 300px);
  grid-template-areas:
    "pane-left main pane-right"
    "footer footer footer";

  & > * {
    &:not(.main) {
      padding: 1rem;
    }
  }
`;

export default function OpenLayers() {
  return (
    <MapProvider>
      <div className={layoutCSS}>
        <div style={{ gridArea: "pane-left" }}>
          <h3>Tiles</h3>
          <ol>
            <li>
              <Link to="/open-layers">Background</Link>
            </li>
            <li>
              <Link to="/open-layers/tile-xyz">Tiles XYZ</Link>
            </li>
          </ol>
          <h3>Vectors</h3>
          <ol>
            <li>
              <Link to="/open-layers/vector-geojson">Vector GeoJSON</Link>
            </li>
            <li>
              <Link to="/open-layers/vector-tiles">Vector Tiles</Link>
            </li>
          </ol>
        </div>
        <div style={{ gridArea: "main" }} className="main">
          <Outlet />
        </div>
        <div style={{ gridArea: "pane-right" }}>right pane</div>
        <div style={{ gridArea: "footer" }}>footer</div>
      </div>
    </MapProvider>
  );
}
