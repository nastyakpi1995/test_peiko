import {StyleSheet} from 'react-native';

export const createStyles = (theme, isValueNegative) => {
  const styles = StyleSheet.create({
    postContainer: {
      flexDirection: 'row',
      margin: 10,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: theme.color.background,
      borderBottomColor: theme.color.primaryText,
      borderBottomWidth: 1,
    },
    id: {
      width: '20%',
      color: isValueNegative ? theme.color.valueBlue : theme.color.valueRed
    },
    text: {
      width: '50%',
      color: isValueNegative ? theme.color.valueBlue : theme.color.valueRed
    },
    value: {
      width: '30%',
      color: isValueNegative ? theme.color.valueBlue : theme.color.valueRed
    },
  });

  return styles
}
