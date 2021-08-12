import {StyleSheet} from 'react-native';

export const createPostsStyles = theme => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.background,
    },
  });

  return styles;
};
