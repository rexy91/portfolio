import React, { Component } from 'react'

import rails from '../blogphotos/rails.jpg'
import bootstrap from '../blogphotos/bootstrap.jpg'
import callback from '../blogphotos/callback.jpg'
import binarysearch from '../blogphotos/binarysearch.jpg'
import expressJS from '../blogphotos/express.jpg'
import singlyLinkList from '../blogphotos/singlyLinkList.jpg'
import BlogCard from './BlogCard'
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
            {   id:1,
                title:'Implementing Singly Linked List in JavaScript',
                url:'https://medium.com/@rxye91/implement-singly-linked-list-in-javascript-3280c171361e',
                img:`${singlyLinkList}`
            },
            {
                id:2,
                title:'Active Record Associations',
                url:'https://medium.com/@rxye91/activerecord-associations-36e049e733bb',
                img:`${rails}`
            },
            {
                id:3,
                title:'JavaScript Callback Functions',
                url:'https://blog.usejournal.com/callback-functions-in-javascript-b3a622586556',
                img:`${callback}`
            },
            {
                id:4,
                title:'Bootstrap Grid System',
                url:'https://medium.com/@rxye91/bootstrap-grid-system-12c9f4d96558',
                img:`${bootstrap}`
            },
            {
                id:5,
                title:'Binary Search Algorithm',
                url:'https://levelup.gitconnected.com/binary-search-algorithm-in-javascript-5227bba08e62',
                img:`${binarysearch}`
            },
            {
                id:6,
                title:'REST Api with Node/Express.JS',
                url:'https://medium.com/@rxye91/rest-api-with-node-express-and-mongodb-99f2c7ecbbc5',
                img:`${expressJS}`
            }
        ]

        const blogsMapper = blogs.map(blog => {
            return <BlogCard singleBlog = {blog} key={blog.id} />
        })


        return (
            <div id = 'blogPage' style={{marginTop:'50px'}}>
                <p id='blog-title'> My Blogs</p>
                <div className="container-">
                        <div className="row">
                            {blogsMapper}
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Blog)
