import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PostProvision from './PostProvision';
import PostList from './PostList';
import 'firebase/database';
global.jQuery=require('jquery');
require('bootstrap');


class ForumWrapper extends Component {
  constructor(props){
    super(props);
    this.databaseRef = this.props.database;
    this.handlePost = this.handlePost.bind(this);
    this.state={
      posts:[""]
    }
  }

componentDidMount(){
  $('#btnPost').scrollTop(100);
  this.databaseRef.on('child_added',(snapshot) => {
    var snap=snapshot.val();
  this.setState({posts:this.state.posts.concat(snap.post)})  ;
  });
}

  handlePost(newPost){
    this.databaseRef.push({
      post:newPost});
    console.log(this.state.posts);
    var tempPost = Object.assign({}, this.state);
    tempPost.posts.push(newPost);
    this.setState(tempPost);
  };

  render() {
    return (
      <div>
        <h1 className="discussion_heading">My Discussion Forum</h1>

        <div className="post_section">
            <PostList posts={this.state.posts}/>
            <PostProvision handler={this.handlePost} />
       </div>

      </div>
    );
  }
}

export default ForumWrapper;
