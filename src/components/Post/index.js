import React, {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStyles} from './styles';
import {useTheme} from '../../theme/ThemeContext';

const Post = ({item, onPress}) => {
  const isValueNegative = item.value > 0;
  const {theme} = useTheme();
  const Styles = useMemo(() => createStyles(theme, isValueNegative), [theme]);

  return (
    <TouchableOpacity onPress={onPress} style={Styles.postContainer}>
      <Text style={[Styles.id]}>{item.id}</Text>
      <Text style={[Styles.text]}>{item.text}</Text>
      <Text style={[Styles.value]}>{item.value.toFixed(8)}</Text>
    </TouchableOpacity>
  );
};

export default Post;
