import { WindowEnv } from "../../load-context";

/**
 * Get's the proper env var based upon how it is to be
 * passed to the app via SSR or Client Side
 */
export function getEnvVar(envVar: keyof WindowEnv) {
  switch (envVar) {
    case "MAPBOX_TOKEN":
      return typeof window === "undefined" ? "" : window.ENV[envVar];

    default:
      break;
  }
}
