import { useContext, createContext } from "react";

export const ThemeDataContext = createContext();
export const useThemeContext = () => {
  const ctx = useContext(ThemeDataContext);
    if (!ctx)
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
    return ctx;
};
export const CartDataContext = createContext();
export const useCartContext = () => {
  const ctx = useContext(CartDataContext);
    if (!ctx)
    throw new Error(
      "useCarContext must be used within a CarContextProvider",
    );
    return ctx;
};
export const AuthDataContext = createContext();
export const useAuthContext = () => {
  const ctx = useContext(AuthDataContext);
    if (!ctx)
    throw new Error(
      "useAuthContext must be used within a AuthContextProvider",
    );
    return ctx;
};