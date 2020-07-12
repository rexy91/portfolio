import React, { Component } from 'react'
import rails from './blogphotos/rails.jpg'
import bootstrap from './blogphotos/bootstrap.jpg'
import callback from './blogphotos/callback.jpg'
import binarysearch from './blogphotos/binarysearch.jpg'
import expressJS from './blogphotos/express.jpg'

import {withRouter} from 'react-router-dom'

export class Blog extends Component {

    openBlog = (e) => {
        const activeRecordUrl = 'https://medium.com/@rxye91/activerecord-associations-36e049e733bb'
        const callbackFunctionUrl = 'https://blog.usejournal.com/callback-functions-in-javascript-b3a622586556'
        const bootstrapUrl = 'https://medium.com/@rxye91/bootstrap-grid-system-12c9f4d96558'
        const binarysearchUrl = 'https://levelup.gitconnected.com/binary-search-algorithm-in-javascript-5227bba08e62'
        const expressUrl = 'https://medium.com/@rxye91/rest-api-with-node-express-and-mongodb-99f2c7ecbbc5'
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
        else if (e.target.name === 'expressJS'){
            window.open(`${expressUrl}`)
        }
    }
    
    render() {
        const blogs = [
            {
                name:'Implementing Singly Linked List in JavaScript',
                url:'https://medium.com/@rxye91/implement-singly-linked-list-in-javascript-3280c171361e'
            },
            {
                name:'Active Record Associations',
                url:'https://medium.com/@rxye91/activerecord-associations-36e049e733bb'
            }
        ]

        return (
            <div id = 'blogPage'>
                <div className="container-">
                        <div className="row">
                            <div className="col-md-4 blogCols">
                                    <h5 onClick = {this.openBlog} name = 'activeRecord'>Active Record Associations</h5>
                                    <img className = 'border rounded' onClick = {this.openBlog} name = 'activeRecord'src={rails} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5 name = 'callbackFunction' onClick = {this.openBlog} >JavaScript Callback Functions</h5>
                                    <img className = 'border rounded' name = 'callbackFunction' onClick = {this.openBlog}  src={callback} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5 name = 'gridSystem'  onClick = {this.openBlog} >Bootstrap Grid System</h5>
                                    <img className = 'border rounded' name = 'gridSystem' onClick = {this.openBlog} src={bootstrap} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5  name = 'binarySearch' onClick = {this.openBlog} > Binary Search Algorithm</h5>
                                    <img className = 'border rounded' name = 'binarySearch' onClick = {this.openBlog} src={binarysearch} alt=""/> 
                            </div>
                            <div className="col-md-4 blogCols">
                                    <h5  name = 'expressJS' onClick = {this.openBlog} > REST Api with Node/Express.JS</h5>
                                    <img className = 'border rounded' name = 'expressJS' onClick = {this.openBlog} src={expressJS} alt=""/> 
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Blog)
