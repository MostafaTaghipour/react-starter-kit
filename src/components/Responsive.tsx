/**
 * https://www.npmjs.com/package/react-responsive/v/9.0.0-beta.2
 */
import {
  useDesktopMediaQuery,
  useMobileMediaQuery,
  useTabletAndAboveMediaQuery,
  useTabletAndBelowMediaQuery,
  useTabletMediaQuery,
} from "@app/hooks/useResponsive";

export const DesktopSize = ({ children }) => {
  const isDesktop = useDesktopMediaQuery();
  return isDesktop ? children : null;
};
export const TabletSize = ({ children }) => {
  const isTablet = useTabletMediaQuery();
  return isTablet ? children : null;
};
export const MobileSize = ({ children }) => {
  const isMobile = useMobileMediaQuery();
  return isMobile ? children : null;
};
export const NotMobileSize = ({ children }) => {
  const isNotMobile = useTabletAndAboveMediaQuery();
  return isNotMobile ? children : null;
};

export const NotDesktopSize = ({ children }) => {
    const isNotDesktop = useTabletAndBelowMediaQuery();
    return isNotDesktop ? children : null;
  };
  