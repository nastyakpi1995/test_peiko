import React, { useMemo } from "react";
import {Text, View} from 'react-native';
import {createPostDetailsStyles} from './styles';
import { useTheme } from "../../theme/ThemeContext";

const PostDetailsScreen = ({
  route: {
    params: {item},
  },
}) => {
  const { theme } = useTheme();
  const isValueNegative = item.value > 0;
  const Styles = useMemo(() => createPostDetailsStyles(theme, isValueNegative), [theme])

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        <Text style={Styles.text}>{item.id}</Text>
        <Text style={Styles.text}>{item.text}</Text>
        <Text style={Styles.text}>{item.value.toFixed(8)}</Text>
      </View>
    </View>
  );
};

export default PostDetailsScreen;
