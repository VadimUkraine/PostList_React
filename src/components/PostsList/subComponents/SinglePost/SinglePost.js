import React from 'react';
import './SinglePost.css'
import {Link}  from 'react-router-dom';;

const SinglePost = ({id, title}) => (
      <Link to={`/${id}`} className="link" >{title}</Link>
);

export default SinglePost;