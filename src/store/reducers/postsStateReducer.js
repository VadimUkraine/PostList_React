const INIT_STATE = {
  showPosts: 10,
};

export default function postsStateReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'POSTS_INCREMENT':
      return { showPosts: state.showPosts +10 };
    case 'POSTS_DICREMENT':
      return { showPosts: 10 };
    default:
      return state;
  }
}
