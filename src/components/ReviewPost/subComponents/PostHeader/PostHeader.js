import React from 'react';
import './PostHeader.css';

const PostHeader = ({title, content}) => (
      <div className="post_wrap">
        <h2 className="post_title">{title}</h2>
        <p className="post_content">{content}</p>
      </div>
);

export default PostHeader;