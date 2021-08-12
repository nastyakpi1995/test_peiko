import React from 'react';
import {DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID} from './DefaultDark.theme';
import {
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID,
} from './DefaultLight.theme';

const Context = React.createContext({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: (theme) => {
    this.theme = theme
    console.log('ThemeProvider is not rendered!', theme);
  },
});

export const ThemeProvider = React.memo(props => {
  const [theme, setTheme] = React.useState(props.initial);

  const ToggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);
