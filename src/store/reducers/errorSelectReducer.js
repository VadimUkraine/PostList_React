const INIT_STATE = {
  errorSelect: '',
};

export default function errorSelectReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'ERROR_SELECT':
      return { errorSelect: action.payload };
    case 'ERROR_COMMENT':
      return { errorSelect: action.payload };
    default:
      return state;
  }
}
