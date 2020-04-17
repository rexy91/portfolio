import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import rails from './blogphotos/rails.jpg'
import bootstrap from './blogphotos/bootstrap.jpg'
import callback from './blogphotos/callback.jpg'
import binarysearch from './blogphotos/binarysearch.jpg'
import blogCard from './blogCard'

import {withRouter} from 'react-router-dom'

export class Blog extends Component {
    openBlog = (e) => {
        const activeRecordUrl = 'https://medium.com/@rxye91/activerecord-associations-36e049e733bb'
        const callbackFunctionUrl = 'https://blog.usejournal.com/callback-functions-in-javascript-b3a622586556'
        const bootstrapUrl = 'https://medium.com/@rxye91/bootstrap-grid-system-12c9f4d96558'
        const binarysearchUrl = 'https://levelup.gitconnected.com/binary-search-algorithm-in-javascript-5227bba08e62'
        if (e.target.name ==='activeRecord'){
            window.open(`${activeRecordUrl}`)
        }
        else if (e.target.name ==='callbackFunction'){
            window.open(`${callbackFunctionUrl}`)
        }
        else if (e.target.name ==='gridSystem'){
            window.open(`${bootstrapUrl}`)
        }
        else if (e.target.name === 'binarySearch') {
            window.open(`${binarysearchUrl}`)
        }
    }
    
    render() {
        return (
            <div id = 'blogPage'>
                {/* <div className = 'ui stackable two column grid'>

                    <div className = 'eight wide column blogContainer' >
                                <h5 onClick = {this.openBlog} name = 'activeRecord'style={{marginLeft:'10vw'}}>Active Record Associations</h5>
                                <img onClick = {this.openBlog} name = 'activeRecord' style={{marginLeft:'10vw'}}src={railsblog} alt=""/>                        
                    </div>
                    <div className = 'eight wide column blogContainer' >
                                  <h5 name = 'callbackFunction' onClick = {this.openBlog} style={{marginRight:'10vw'}}>JavaScript Callback Functions</h5>
                                  <img name = 'callbackFunction' onClick = {this.openBlog} style={{marginRight:'10vw', marginTop:'1vh'}} src={callbackfunction} alt=""/>            
                    </div>
                    <div className = 'eight wide column blogContainer'>
                                <h5 name = 'gridSystem'  onClick = {this.openBlog} style={{marginLeft:'10vw'}}>Bootstrap Grid System</h5>
                                <img name = 'gridSystem' onClick = {this.openBlog} style={{marginLeft:'10vw'}} src={bootstrap} alt=""/> 
                    </div>

                    <div className = 'eight wide column blogContainer'>
                                <h5  name = 'binarySearch' onClick = {this.openBlog} style={{marginRight:'10vw'}}> Binary Search Algorithm</h5>
                                <img name = 'binarySearch' onClick = {this.openBlog} style={{marginRight:'10vw'}} src={binarysearch} alt=""/> 
                    </div>              
                </div> */}
                <div className="container-">
                        <div className="row">
                            
                            <div className="col-md-4 blogCols">
                                    <h5 onClick = {this.openBlog} name = 'activeRecord'>Active Record Associations</h5>
                                    <img onClick = {this.openBlog} name = 'activeRecord'src={rails} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5 name = 'callbackFunction' onClick = {this.openBlog} >JavaScript Callback Functions</h5>
                                    <img name = 'callbackFunction' onClick = {this.openBlog}  src={callback} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5 name = 'gridSystem'  onClick = {this.openBlog} >Bootstrap Grid System</h5>
                                    <img name = 'gridSystem' onClick = {this.openBlog} src={bootstrap} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5  name = 'binarySearch' onClick = {this.openBlog} > Binary Search Algorithm</h5>
                                    <img name = 'binarySearch' onClick = {this.openBlog} src={binarysearch} alt=""/> 
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Blog)
