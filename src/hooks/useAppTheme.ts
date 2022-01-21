import { ThemeContext } from "@app/Providers/ThemeProvider";
import theme from "@app/theme";
import { useContext } from "react";

export default function useAppTheme() {
  const { currentTheme: currentSample, switchTheme} = useContext(ThemeContext);
  const isDark = currentSample == "dark";

  return {
    isDark,
    themeName: currentSample,
    theme: theme[isDark ? "dark" : "light"],
    reverse: theme[isDark ? "light" : "dark"],
    switchTheme
  };
}
