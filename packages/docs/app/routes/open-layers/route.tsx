import { css } from "@linaria/core";
import { MapProvider } from "@react-cartography/ol";
import { Link, Outlet, useMatches } from "@remix-run/react";
import { ModuleHandle } from "../../utils/createHandle";

const layoutCSS = css`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 300px) 1fr minmax(
      min-content,
      500px
    );
  grid-template-areas: "pane-left main pane-right";

  & > * {
    &:not(.main) {
      padding: 1rem 2rem;
    }
  }

  .pane-left {
    grid-area: pane-left;
  }

  .pane-right {
    grid-area: pane-right;

    p {
      line-height: 1.5;
    }
  }
`;

export default function OpenLayers() {
  const matches = useMatches();
  const routeDetails = matches.reduce<ModuleHandle | undefined>(
    (accum, match) => {
      if (!match.handle) return accum;
      const handle = match.handle as ModuleHandle;
      if (!handle.title || !handle.subTitle || !handle.description) {
        return accum;
      }
      return handle;
    },
    undefined
  );

  return (
    <MapProvider>
      <div className={layoutCSS}>
        <div className="pane-left">
          <h2>Layer Hook Abstractions</h2>
          <p>
            A layer is a visual representation of data from a source. OpenLayers
            has four basic types of layers:
          </p>
          <h3>useLayerTile</h3>
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
          <h3>useLayerImage</h3>
          <p>
            Renders sources that provide map images at arbitrary extents and
            resolutions.
          </p>
          <ol>
            <li></li>
          </ol>
          <h3>useLayerVector</h3>
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
          <h3>useLayerVectorTile</h3>
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
        <div className="pane-right">
          {!routeDetails ? (
            <h2>No Description</h2>
          ) : (
            <>
              <h2>{routeDetails.title}</h2>
              <h3>{routeDetails.subTitle}</h3>
              {routeDetails.description()}
            </>
          )}
        </div>
      </div>
    </MapProvider>
  );
}
