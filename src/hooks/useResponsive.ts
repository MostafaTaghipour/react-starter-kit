/**
 * https://www.npmjs.com/package/react-responsive/v/9.0.0-beta.2
 */
import { useMediaQuery } from "react-responsive";

export const useDesktopMediaQuery = () => useMediaQuery({ minWidth: 1025 });

export const useTabletMediaQuery = () =>
  useMediaQuery({ minWidth: 768, maxWidth: 1024 });

export const useMobileMediaQuery = () => useMediaQuery({ maxWidth: 767 });

export const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ maxWidth: 1024 });

export const useTabletAndAboveMediaQuery = () =>
  useMediaQuery({ minWidth: 768 });

export const usePortraitMediaQuery = () =>
  useMediaQuery({
    query: "(orientation: portrait)",
  });
  
export const useRetinaMediaQuery = () =>
  useMediaQuery({ query: "(min-resolution: 2dppx)" });
