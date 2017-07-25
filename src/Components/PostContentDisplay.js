import React, { Component } from 'react';

class PostContentDisplay extends Component {
  render() {
    return (
        <div className="panel panel-default single-post">
          <div className="panel-body ">
              {this.props.postContent}
          </div>
        </div>
    );
  }
}

export default PostContentDisplay;
