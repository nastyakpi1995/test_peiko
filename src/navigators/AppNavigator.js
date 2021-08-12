import React, {useMemo} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {POST_NAVIGATION, POSTS_NAVIGATION} from '../constants';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import PostsScreen from '../screens/PostsScreen';
import {useTheme} from '../theme/ThemeContext';
import HeaderComponent from '../components/HeaderComponent';

const Stack = createStackNavigator();

const createStyles = theme => {
  const screenOptions = {
    headerMode: 'screen',
    headerShown: true,
    animationEnabled: true,
    headerStyle: {
      flexDirection: 'row',
      backgroundColor: theme.color.backgroundColor,
    },
  };

  return screenOptions;
};

const AppNavigator = () => {
  const {theme} = useTheme();
  const screenOptions = useMemo(() => createStyles(theme), [theme]);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{headerTitle: props => <HeaderComponent {...props} />}}
        name={POSTS_NAVIGATION}
        component={PostsScreen}
      />
      <Stack.Screen name={POST_NAVIGATION} component={PostDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
