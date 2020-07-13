import React, { Component } from 'react'
export class BlogCard extends Component {

    openBlog = (e) => {
        const {url} = this.props.singleBlog

        window.open(`${url}`)
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
