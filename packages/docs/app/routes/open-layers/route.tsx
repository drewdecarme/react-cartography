import { css } from "@linaria/core";
import { MapProvider } from "@react-cartography/ol";
import { Link, Outlet, useMatches } from "@remix-run/react";
import { ReactNode } from "react";

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

type ModuleHandle = {
  description: (() => ReactNode) | undefined;
};

export default function OpenLayers() {
  const matches = useMatches();
  const description = matches.reduce<ModuleHandle["description"]>(
    (accum, match) => {
      if (match.handle && (match.handle as ModuleHandle).description) {
        return (match.handle as ModuleHandle).description as () => ReactNode;
      }
      return accum;
    },
    undefined
  );

  return (
    <MapProvider>
      <div className={layoutCSS}>
        <div style={{ gridArea: "pane-left" }}>
          <h2>Layers</h2>
          <p>
            A layer is a visual representation of data from a source. OpenLayers
            has four basic types of layers:
          </p>
          <h3>Tile</h3>
          <p>
            Renders sources that provide tiled images in grids that are
            organized by zoom levels for specific resolutions.
          </p>
          <ol>
            <li>
              <Link to="/open-layers">Open Street Map</Link>
            </li>
            <li>
              <Link to="/open-layers/tile-xyz">XYZ Format</Link>
            </li>
          </ol>
          <h3>Image</h3>
          <p>
            Renders sources that provide map images at arbitrary extents and
            resolutions.
          </p>
          <ol>
            <li></li>
          </ol>
          <h3>Vector</h3>
          <p>Renders vector data client-side.</p>
          <ol>
            <li>
              <Link to="/open-layers/vector-geojson-from-url">
                Vector GeoJSON from url
              </Link>
            </li>
            <li>
              <Link to="/open-layers/vector-geojson-from-file">
                Vector GeoJSON from file
              </Link>
            </li>
          </ol>
          <h3>Vector Tile</h3>
          <p>Renders data that is provided as vector tiles.</p>
          <ol>
            <li>
              <Link to="/open-layers/vector-tiles">Vector Tiles</Link>
            </li>
          </ol>
        </div>
        <div style={{ gridArea: "main" }} className="main">
          <Outlet />
        </div>
        <div style={{ gridArea: "pane-right" }}>
          <h2>Description</h2>
          {description ? description() : "No description"}
        </div>
        <div style={{ gridArea: "footer" }}>footer</div>
      </div>
    </MapProvider>
  );
}
