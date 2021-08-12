import React, { memo } from "react";
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigators/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux';
import { DEFAULT_LIGHT_THEME } from "./theme/DefaultLight.theme";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";

const App = memo(() => {
  return (
    <Provider store={store}>
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
});

export default App;
