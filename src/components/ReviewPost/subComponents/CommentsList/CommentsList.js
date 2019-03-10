import React, { Component } from 'react';
import './CommentsList.css';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/getComments';
import * as uuid from 'uuid/v4';
import SingleComment from './subComponents/SingleComment/SingleComment'

class CommentsList extends Component {

  constructor(){
    super();

    this.state = {
   
    };
   
  }
  

  componentDidMount() {
      const postId = this.props.postID;
      this.props.getComments(postId);
  }

  render() {
    const postId = this.props.postID;

    return (
      <div>
          {this.props.comments.comments.length ? this.props.comments.comments.map((comment) => (
                  comment.postId === Number(postId) ?
                  <SingleComment
                    key={uuid()}
                    name={comment.name}
                    creator={comment.email}
                    text={comment.body}
                  /> : null))
                  : (<div className="preloader_comments">
                      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
                        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                      </svg>
                  </div>)
             }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
});

function mapDispatchToProps(dispatch) {
  return {
    getComments: (postId) => dispatch(actions.getComments(postId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);