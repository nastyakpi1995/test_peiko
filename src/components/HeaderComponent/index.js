import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../theme/ThemeContext';
import {createHeaderStyles} from './styles';

const HeaderComponent = props => {
  const {theme, toggleTheme} = useTheme();
  const Styles = useMemo(() => createHeaderStyles(theme), [theme]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{props.children}</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={Styles.button}>change theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
