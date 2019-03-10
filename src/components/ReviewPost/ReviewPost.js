import React, { Component } from 'react';
import './ReviewPost.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/getPost';
import PostHeader from './subComponents/PostHeader/PostHeader'
import CommentsList from './subComponents/CommentsList/CommentsList'


class ReviewPost extends Component {

  constructor(){
    super();

    this.state = {
   
    };
   
  }

  componentDidMount() {
      const postId = this.props.match.params.id;
      this.props.getPost(postId);
  }

  render() {
    const postId = this.props.match.params.id;
    
    return (
      <div className="review">
        {Object.keys(this.props.select.select).length ?
          ( <React.Fragment>
              <PostHeader 
                key={this.props.select.select.id}
                title={this.props.select.select.title}
                content={this.props.select.select.body}
              />
              <div className="comments_wrap">
                <h3>Comments:</h3>
                <CommentsList postID={postId}/>
              </div>
            </React.Fragment>)
        : (<div className="preloader">
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
                  <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>)
        }
        {this.props.error.errorSelect.length >0 && <div className="error_posts">Error: {this.props.error.errorSelect} </div>}    

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  select: state.select,
  error: state.errorSelect,

});

function mapDispatchToProps(dispatch) {
  return {
    getPost: (postId) => dispatch(actions.getPost(postId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPost);
