import React from 'react';
import './SingleComment.css';

const SingleComment = ({name, creator, text}) => (
      <div className="comments">
        <p className="comments__name"><span>Title:</span> {name}</p>
        <p className="comments__creator"><span>Creator:</span> {creator}</p>
        <p className="comments__text"><span>Comment:</span> {text}</p>
      </div>
);

export default SingleComment;