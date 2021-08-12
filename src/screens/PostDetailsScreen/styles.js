import {StyleSheet} from 'react-native';

export const createPostDetailsStyles = (theme, isValueNegative) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.color.background,
      height: '100%'
    },
    container: {
      backgroundColor: theme.color.background,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      paddingBottom: 150
    },
    text: {
      color: isValueNegative ? theme.color.valueBlue : theme.color.valueRed,
      fontSize: 20,
    },
  });
  return styles
}

