const INIT_STATE = {
  select: {}
};

export default function selectedReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_POST':
      return { select: action.payload };
    default:
      return state;
  }
}
