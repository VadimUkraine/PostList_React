const INIT_STATE = {
  error: '',
};

export default function errorPostsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'ERROR_POSTS':
      return { error: action.payload };
    default:
      return state;
  }
}
