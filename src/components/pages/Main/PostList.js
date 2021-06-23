import React, { Component } from 'react'
import Post from './Post';

class PostList extends Component {

    render() {
    const posts = this.props.posts;
    const listItems = posts.map((data) =>
    <Post key={data.content.toString()} id={data._id} author={data.author} time={data.time} content={data.content} picture={data.picture} like={data.like} onLike={this.props.onLike} onDelete={this.props.onDelete}/>
    // <Post id={data._id} content={data.content} title={data.title}/>
  );
        return (
            <div>
                <ul className="list-unstyled">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default PostList
