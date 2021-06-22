import React, { Component } from 'react'

class Post extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             likeColor: 'secondary'
        }
        this.handleLike = this.handleLike.bind(this);   

    }

    // handleLike() {
    //     if(this.state.likeColor == 'secondary') {
    //         this.setState({
    //             likeColor: 'primary'
    //         })
    //     } else {
    //         this.setState({
    //             likeColor: 'secondary'
    //         })
    //     }
        
    // }

    handleLike = () => {
        this.props.onLike(this.props.id)        
        console.log(this.props.onLike(this.props.id))   
        if(this.props.onLike(this.props.id) === "primary") {
            this.setState({
                likeColor: 'primary'
            })
        } else {
            this.setState({
                likeColor: 'secondary'
            })
        }
    }

    
    render() {

        return (
            // <div className="border border-aqua">
            //     {this.props.title}
            // </div>
            <div className="bg-light mb-3 py-3 px-2 card">
                <div className="card-body">
                    <h6>
                        <img className="postAuthor border rounded-circle mr-2" src={this.props.picture} alt={this.props.content}></img>
                        {this.props.author}
                    </h6>
                    <p>{this.props.time}</p>
                    <p>{this.props.content}</p>
                </div>
                <img className="postImage mt-2" src={this.props.picture} alt={this.props.content}></img>
                <div className="row mt-2">
                    <div className="col-sm-6 text-center">
                        {/* <button onClick={this.handleLike} className={`btn likeButton text-${this.state.likeColor}`}><i className="far fa-thumbs-up mr-1"></i>
 Imi place</button> */}
                        {/* <button onClick={this.handleLike} className={`btn likeButton text-${this.props.like}`}><i className="far fa-thumbs-up mr-1"></i>
                        Imi place</button> */}
                        <button onClick={this.handleLike} className={`btn likeButton text-${this.state.likeColor}`}><i className="far fa-thumbs-up mr-1"></i>
                        Imi place</button>
                    </div>
                    <div className="col-sm-6 text-center">
                        <button className="btn commentButton"><i className="far fa-comment mr-1"></i>
 Comenteaza</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post
