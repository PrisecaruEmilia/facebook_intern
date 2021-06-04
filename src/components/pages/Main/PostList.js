import React, { Component } from 'react'
import Post from './Post';

class PostList extends Component {

    render() {
    const posts = this.props.posts;
    const listItems = posts.map((data) =>
    <Post key={data.text_content.toString()} id={data.id} author={data.author} time={data.time} content={data.text_content} picture={data.picture} like={data.like} onLike={this.props.onLike}/>
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
