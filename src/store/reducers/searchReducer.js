const INIT_STATE = {
  search: '',
};

export default function searchReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SEARCH_UPDATE':
      return { search: action.payload };
    default:
      return state;
  }
}
