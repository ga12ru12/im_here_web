'use strict'

import React, {Component} from 'React';

export default class Info extends Component{
  render(){
    return(
      <div className="info-div">
        <div className="header-div">
          <div><img src="./img/default_avatar.png"></img></div>
          <div><span><b>0976 112 600</b></span></div>
        </div>
      </div>
    );
  }
}