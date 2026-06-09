import { useLocation } from "react-router-dom";
export const useMyLocation = () => {
  const location = useLocation();
  return location.pathname.replace('/', '');
};
