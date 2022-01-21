import Cookies from "js-cookie";
import React, { useState } from "react";

export const ThemeContext = React.createContext<{
  currentTheme: string;
  switchTheme: (newTheme: string) => any;
}>({
  currentTheme: "",
  switchTheme: (newTheme: string) => {},
});

export const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [_val, set_val] = useState(Cookies.get("theme") || "light");

  const _context = React.useMemo(
    () => ({
      currentTheme: _val,
      switchTheme: (newTheme: string) => {
        if (_val == newTheme) return;
        Cookies.set("theme", newTheme);
        set_val(newTheme);
      },
    }),
    [_val]
  );

  return (
    <ThemeContext.Provider value={_context}>{children}</ThemeContext.Provider>
  );
};
