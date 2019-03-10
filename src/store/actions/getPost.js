import axios from 'axios';


export function getPostSuccess(post) {
  return {
    type: 'GET_POST',
    payload: post
  };
}

export function errorSelectPost(error) {
  return {
    type: 'ERROR_SELECT',
    payload: error
  };
}


export function getPost(postId) {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        const post = response.data;
        dispatch(getPostSuccess(post));
      })
      .catch((error) => {
        dispatch(errorSelectPost(error));
      });
  };
}