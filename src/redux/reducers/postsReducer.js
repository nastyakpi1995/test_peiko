import { FETCH_TYPES, TYPES } from "../constants";
const defaultState = {
  posts: [],
  loading: false,
  error: null,
  theme: 'light',
  meta: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TYPES.ASYNC_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_TYPES.ASYNC_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload.meta.current_page === 1 ? action.payload.data : [...state.posts, ...action.payload.data],
        meta: action.payload.meta,
      }
    }
    case FETCH_TYPES.ASYNC_POSTS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};
