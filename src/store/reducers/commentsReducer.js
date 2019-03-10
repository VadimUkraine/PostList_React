const INIT_STATE = {
  comments: []
};

export default function getComments(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return { comments: action.payload };
    default:
      return state;
  }
}
