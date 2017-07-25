import React, { Component } from 'react';
import Post from './PostContentDisplay';
class PostList extends Component {
  render() {
    var PList =   this.props.posts.map((post,idx)=>{
      if(post!==""){
          return (<Post postContent={post} key={idx} />);}
      }
    )
    
    return (
      <div>{PList}</div>
    );
  }
}

export default PostList;
