import React, { Component } from 'react';
import SinglePost from './subComponents/SinglePost/SinglePost';
import './PostsList.css';
import { connect } from 'react-redux';
import getAllPosts from '../../store/actions/contentPosts';
import * as uuid from 'uuid/v4';
import postStateIncrement from '../../store/actions/postStateIncrement';
import postStateDicrement from '../../store/actions/postStateDicrement';
import searchState from '../../store/actions/searchState';



class PostsList extends Component {
  componentDidMount() {
      this.props.getAllPosts();
  }

  constructor(){
    super();

    this.state = {
    };   
  }

  updateSearch(event){   
    let search = event.target.value;
    this.props.changeSearch(search)
    if(event.target.value.trim().length > 0){ 
      this.props.changePostDicrement();
    }
  }

  showMorePosts(){
      this.props.changePostIncrement();
  };



  render() {
    const filterPosts = this.props.allPosts.posts.filter(
        (post)=>{
          return post.title.toLowerCase().indexOf(this.props.search.search.toLowerCase()) !== -1 ;
        }
      );


    return (
         <main className="wrapper">
            <header>
              <h1>List of Posts</h1>
              <input type="text" placeholder="search" value ={this.props.search.search} onChange={this.updateSearch.bind(this)} />
            </header>
            {filterPosts.length ? (filterPosts.slice(0, this.props.stateShowPosts.showPosts)
              .map((posts) => (
                <SinglePost
                  key={uuid()}
                  id={posts.id}
                  title={posts.title}
                />
              )))
              : <div className="postlist_loading">Loading...</div>
            }
            <button className="bnt_more" type="button" onClick={this.showMorePosts.bind(this)}> Load More </button>
            {this.props.error.error.length >0 && <div className="error_posts">Error: {this.props.error.error} </div>}
          </main>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts,
  stateShowPosts: state.showPosts,
  search: state.search,
  error: state.errorPosts,
});

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
    changePostIncrement: () => dispatch(postStateIncrement()),
    changePostDicrement: () => dispatch(postStateDicrement()),
    changeSearch: (search) => dispatch(searchState(search)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
