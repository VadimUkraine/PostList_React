const INIT_STATE = {
  posts: []
};

export default function postsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return { posts: action.payload };
    default:
      return state;
  }
}

