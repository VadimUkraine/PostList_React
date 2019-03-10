import axios from 'axios';


export function getCommentsSuccess(comments) {
  return {
    type: 'GET_COMMENTS',
    payload: comments
  };
}

export function errorCommentsPost(error) {
  return {
    type: 'ERROR_COMMENT',
    payload: error
  };
}

export function getComments(postId) {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        const comments = response.data;
        dispatch(getCommentsSuccess(comments));
      })
      .catch((error) => {
         dispatch(errorCommentsPost(error));
      });
  };
}