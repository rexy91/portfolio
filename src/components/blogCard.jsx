import React, { Component } from 'react'

export class BlogCard extends Component {
    // openBlog = (e) => {
    //     const activeRecordUrl = 'https://medium.com/@rxye91/activerecord-associations-36e049e733bb'
    //     const callbackFunctionUrl = 'https://blog.usejournal.com/callback-functions-in-javascript-b3a622586556'
    //     const bootstrapUrl = 'https://medium.com/@rxye91/bootstrap-grid-system-12c9f4d96558'
    //     const binarysearchUrl = 'https://levelup.gitconnected.com/binary-search-algorithm-in-javascript-5227bba08e62'
    //     const expressUrl = 'https://medium.com/@rxye91/rest-api-with-node-express-and-mongodb-99f2c7ecbbc5'
    //     if (e.target.name ==='activeRecord'){
    //         window.open(`${activeRecordUrl}`)
    //     }
    //     else if (e.target.name ==='callbackFunction'){
    //         window.open(`${callbackFunctionUrl}`)
    //     }
    //     else if (e.target.name ==='gridSystem'){
    //         window.open(`${bootstrapUrl}`)
    //     }
    //     else if (e.target.name === 'binarySearch') {
    //         window.open(`${binarysearchUrl}`)
    //     }
    //     else if (e.target.name === 'expressJS'){
    //         window.open(`${expressUrl}`)
    //     }
    // }
    openBlog = () => {
        
    }
    render() {
        const {title, img} = this.props.singleBlog
        return (
            <div className="col-md-4 blogCols">
                    <h5 onClick = {this.openBlog} name = 'activeRecord'>{title}</h5>
                    <img className = 'border rounded' onClick = {this.openBlog} name = 'activeRecord'src={img} alt=""/> 
        </div>
        )
    }
}

export default BlogCard
