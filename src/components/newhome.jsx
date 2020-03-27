import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import $ from 'jquery'
export class newhome extends Component {


toggleSidebar = () => {
$('.ui.sidebar')
  .sidebar('toggle')
;
  }
    render() {

        return (
          <div>
            <div className = 'ui sidebar left inverted menu'>
                  <a href='#'> Test1</a>
                  <a href='#'> Test2</a>
                  <a href='#'> Test3</a>
                  <a href='#'> Test4</a>
            </div>
            <h1></h1>
            <div className = 'ui basic icon menu'>
                <div id ='toggle' onClick = {this.toggleSidebar} >
                  <i className = 'sidebar icon'></i>
                      Menu
                </div>
            </div>
            
          </div>
        ) 

    }
}

export default newhome


