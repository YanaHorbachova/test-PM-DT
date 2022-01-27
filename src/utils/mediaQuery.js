import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1440 })
    return isDesktop ? children : null
};