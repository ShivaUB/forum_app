import React, { Component } from 'react';
import $ from 'jquery';

class PostProvision extends Component {
constructor(props){
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(ev){
  ev.preventDefault();
  this.props.handler(this.refs.ppt.value);
  this.refs.ppt.value="";
  $("#btnPost").scrollTop(100);
}


  render() {
    return (
      <div className="panel panel-default single-post">
        <div className="panel-body changeColor ">
          <input type="text" className="form-control"  ref="ppt"/>
          <button type="button" id="btnPost" className="btn btn-success post-btn-float" onClick={this.handleClick} >Post</button>
        </div>
      </div>
    );
  }
}

export default PostProvision;
