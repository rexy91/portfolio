import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import railsblog from './blogphotos/railsblog.jpg'
import bootstrap from './blogphotos/bootstrap.jpg'
import callbackfunction from './blogphotos/callbackfunction.jpg'
import binarysearch from './blogphotos/binarysearch.jpg'
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
                <div className = 'ui stackable two column grid'>

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
                </div>
                {/* <div class="ui grid">
                    <div class="two wide computer zero wide mobile column ">
                            <Card style={{minWidth: '450'}}>
                           
                            </Card>
                    </div>
                    <div class="six wide computer sixteen wide mobile column">
                           <Card style={{width: '100%'}}>
                                <h4 style = {{marginBottom:'-1vh'}}>Active Record Associations</h3>
                                <img src={railsblog} alt=""/>
                                
                            </Card>

                    </div>
                    <div class="six wide computer sixteen wide mobile column">
                            <Card style={{width: '100%'}}>
                                <h3 style = {{marginBottom:'1vh'}}>Bootstrap Grid System</h3>
                                <img src={bootstrap} alt=""/>
                            </Card>

                    </div>
                    <div class="two wide computer sisteen wide mobile column">
                             <Card style={{minWidth: '450'}}>
                            </Card>

                    </div>
                    <div class="two wide column">

                    </div>
                    <div class="six wide column">
                         <h3 style = {{marginBottom:'-1vh'}}>JavaScript Callback Functions</h3>
                        <img src={callbackfunction} alt=""/>
                    </div>
                    <div class="six wide column">
                        <h3 style = {{}}>Binary Search Algorithm</h3>
                        <img src={binarysearch} alt=""/>
                    </div>
                    <div class="two wide column">

                    </div>
                </div> */}
            </div>
        )
    }
}

export default withRouter(Blog)
