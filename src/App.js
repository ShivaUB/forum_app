import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ForumWrapper from './Components/ForumWrapper';
import * as firebase from 'firebase/app';
global.jQuery=require('jquery');
require('bootstrap');



class App extends Component {
constructor(props){
  super(props);
    //firebase content
    var config = {
        apiKey: "Your API key",
        authDomain: "PLACE YOUR CODE HERE",
        databaseURL: "USE THE DATABASE URL",
        projectId: "PROJECT ID GOES HERE",
        storageBucket: "CHECK THE ID",
        messagingSenderId: "YOU WILL FIND ALL THESE IN FIREBASE REALTIME DB"
        };
        this.app=firebase.initializeApp(config);
         this.databaseObj=this.app.database().ref('object/');
    //firebase content ends here

}
  render() {
    return (
      <ForumWrapper database={this.databaseObj}/>
    );
  }
}

export default App;
