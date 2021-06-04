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
    }
]

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: sample,
             value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.onLike=this.onLike.bind(this);
    }

    // componentDidMount = () => {
    //     if(document.location.pathname === '/') {
    //         localStorage.setItem("localData", sampleTest)
    //     }
    //     console.log(localStorage.getItem('localData'))
    //     this.setState({
    //         posts: localStorage.getItem('localData')
    //     })
    // }

    // componentDidUpdate() {
    //     console.log(localStorage.getItem('localData'))
    //     this.setState({
    //         posts: localStorage.getItem('localData')
    //     })
    // }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.value)
        const temp = {
                "id": this.state.posts.length + 1,
                "author": "Microsoft CEE",
                "time": "13 ore",
                "text_content": this.state.value,
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

        this.setState({
            posts: [temp, ...this.state.posts]
        });

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

    onLike() {
        // alert(this.state.posts.like);
        console.log(this.state.posts[0].author);
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
                            <PostList posts={this.state.posts}  onLike={this.onLike}/>
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
