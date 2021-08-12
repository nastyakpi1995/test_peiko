import {Dimensions, StyleSheet} from 'react-native';

export const createHeaderStyles = theme => {
  const {width} = Dimensions.get('screen');

  const styles = StyleSheet.create({
    button: {
      color: theme.color.primaryText,
    },
    container: {
      elevation: 888,
      zIndex: 999,
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      backgroundColor: theme.color.background,
      paddingVertical: 19,
      borderBottomColor: theme.color.primaryText,
      borderBottomWidth: 1
    },
    title: {
      color: theme.color.primaryText,
      textTransform: 'capitalize'
    }
  });
  return styles;
};
