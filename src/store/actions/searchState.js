export default function searchState(search) {
  return {
    type: 'SEARCH_UPDATE',
    payload: search
  };
}