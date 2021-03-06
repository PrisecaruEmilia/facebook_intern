import axios from 'axios';
import React, { Component } from 'react'
import BottomNavBar from './Main/BottomNavBar';
import PostList from './Main/PostList';
import TopNavBar from './Main/TopNavBar';

const sample = [
    {
        "id": 1,
        "author": "Catalin Ciobanu",
        "time": "2 ore",
        "text_content": "Web/Js internship",
        "picture": "./images/post-1.jpg",
        "like": false
    },
    {
        "id": 2,
        "author": "Avram Rebeca",
        "time": "8 ore",
        "text_content": "Have you heard the news?",
        "picture": "./images/post-2.png",
        "like": false
    },
    {
        "id": 3,
        "author": "Ioana Bala",
        "time": "3 ore",
        "text_content": "What a beautifull day :)",
        "picture": "./images/post-3.jpg",
        "like": false
    },
    {
        "id": 4,
        "author": "Radio Zu",
        "time": "1 mai la 16:52",
        "text_content": "Astazi este ziua internationala a Muzeelor",
        "picture": "./images/post-4.jpg",
        "like": false
    },
    {
        "id": 5,
        "author": "Microsoft CEE",
        "time": "13 ore",
        "text_content": "Instruiti-va gratuit si castigati cu pana la 20% mai mult cu certificarea Microsoft",
        "picture": "./images/post-5.jpg",
        "like": false
    }
]

const sampleTest = [
    {
        "_id": 1,
        "content": "Web/Js internship",
        "title": "First post"
    }
]

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             value: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.onLike=this.onLike.bind(this);
        this.onDelete=this.onDelete.bind(this);

    }

    componentDidMount = () => {
        
        // const posts = async()=>{
        //     try{
        //         const resp = await axios.get("https://facebook-intern.herokuapp.com/posts")
        //         console.log(resp.data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // this.setState({
        //     posts: sampleTest
        // })

        // console.log(posts);
        this.getPosts()
    }


    getPosts = async () => {
        let resp = await axios.get("https://facebook-intern.herokuapp.com/posts")
        this.setState({ posts: resp.data })
    };

    // getPosts = () => {
    //     axios
    //         .get("https://facebook-intern.herokuapp.com/posts")
    //         .then(data => this.setState({ posts: data.data }))
    //         .catch(err => {
    //             console.log(err);
    //             return null;
    //         });
    //  };

    // componentDidUpdate() {
    //     console.log(localStorage.getItem('localData'))
    //     this.setState({
    //         posts: localStorage.getItem('localData')
    //     })
    // }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    postPosts = async () => {
        const temp = {
            "author": "Microsoft CEE",
            "time": "13 ore",
            "content": this.state.value,
            "picture": "./images/post-5.jpg",
            "like": false
        }
        let resp = await axios.post("https://facebook-intern.herokuapp.com/post", temp)
        this.setState({
            posts: [resp.data, ...this.state.posts]
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.value)
        const temp = {
                "_id": this.state.posts.length + 1,
                "author": "Microsoft CEE",
                "time": "13 ore",
                "content": this.state.value,
                "picture": "./images/post-5.jpg",
                "like": false
        }
        // this.setState(state => {
        //     const posts = [...state.posts, temp];
       
        //     return {
        //       posts,
        //       value: '',
        //     };
        //   });

        // this.setState({
        //     posts: [temp, ...this.state.posts]
        // });

        this.postPosts()

        this.setState({
            value: ''
        })

        // this.setState({
        //     posts: this.state.posts.concat({
        //         "author": "Microsoft CEE",
        //         "time": "13 ore",
        //         "text_content": this.state.value,
        //         "picture": "./images/post-5.jpg"
        //     })
        // })
        // this.setState({
        //     value: ''
        // })
    }

    onLike(id) {
        // alert(this.state.posts.like);
        // console.log(this.state.posts[0].author);
        if(this.state.posts.find(x => x._id === id).like === false){
            this.state.posts.find(x => x._id === id).like = true
            return "primary"
        } else {
            this.state.posts.find(x => x._id === id).like = false
            return "secondary"
        }
        // console.log(this.state.posts.find(x => x._id === id).like);

    }

    deletePosts = async (id) => {
        let resp = await axios.delete(`https://facebook-intern.herokuapp.com/post/${id}`)
        // this.setState({
        //     posts: [resp.data]
        // });
        const newPosts = [...this.state.posts];
        const thisId = this.state.posts.find(x => x._id === id)._id
        const index = this.state.posts.indexOf(thisId)
        newPosts.splice(index, 1);

        this.setState({
            posts: newPosts
        })
        // console.log(id)
    };

    onDelete(id) {
        const thisId = this.state.posts.find(x => x._id === id)._id
        this.deletePosts(thisId)
    }
    
    render() {
        
        return (
            <div>
                <TopNavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-none d-md-inline col-12 col-md-3">text</div>
                        <div className="col col-md-6">
                            <div className="card my-2">
                                <div className="row p-2">
                                    <div className="col-2">
                                        <img className="avatar" src="/logo192.png"  alt="avatar"/>
                                    </div>
                                    <div className="col-10">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-group">
                                            <input type="text" className="form-control rounded" placeholder="Add Post" aria-label="AddPost" aria-describedby="basic-addon1" value={this.state.value} onChange={this.handleChange} />
                                            <button type="button submit" className="btn btn-primary mx-2">Submit</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                            {/* <PostList posts={sample} /> */}
                            <PostList posts={this.state.posts}  onLike={this.onLike} onDelete={this.onDelete}/>
                        </div>
                        <div className="d-none d-md-inline col-12 col-md-3">text</div>
                    </div>
                </div>
                <BottomNavBar />
            </div>
        )
    }
}

export default Main
