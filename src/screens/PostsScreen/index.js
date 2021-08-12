import React, {useEffect, useState, useCallback, memo, useMemo} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Post from '../../components/Post';

import {FETCH_TYPES} from '../../redux/constants';
import {useNavigation} from '@react-navigation/native';
import {POST_NAVIGATION} from '../../constants';
import ErrorComponent from '../../components/ErrorComponent';
import {createPostsStyles} from './styles';
import {useTheme} from '../../theme/ThemeContext';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const PostsScreen = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const state = useSelector(state => state.postsReducer, shallowEqual);
  const [page] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch({type: FETCH_TYPES.ASYNC_POSTS_REQUEST, page});
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));

    dispatch({
      type: FETCH_TYPES.ASYNC_POSTS_REQUEST,
      page: 1,
    });
  }, []);

  const handleEndReached = useCallback(() => {
    dispatch({
      type: FETCH_TYPES.ASYNC_POSTS_REQUEST,
      page: state.meta?.next_page,
    });
  }, []);

  const onPress = useCallback(item => {
    navigation.navigate(POST_NAVIGATION, {item});
  }, []);
  const {theme} = useTheme();

  const Styles = useMemo(() => createPostsStyles(theme), [theme]);

  return state.error === null ? (
    <View style={Styles.container}>
      <FlatList
        data={state.posts}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.id.toString()}
        onEndReached={({distanceFromEnd}) =>
          distanceFromEnd > 0 && handleEndReached()
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <Post onPress={() => onPress(item)} item={item} />
        )}
      />
      {state.loading && <ActivityIndicator size="small" color="#0000ff" />}
    </View>
  ) : (
    <ErrorComponent message={state?.error.message} title={state?.error.title} />
  );
});

export default PostsScreen;
