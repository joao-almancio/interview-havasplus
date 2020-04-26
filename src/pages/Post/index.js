import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

class PostPage extends Component {
  state = {
    posts: [],
    selectedPost: {},
    readMore: [],

    cont: 0
  }

  async componentDidMount() {
    let params = this.props.match.params;
    let res = await api.get();
    this.setState( { posts: res.data });
    
    let {posts} = this.state;
    let selectedPost = posts.find(item => item.id == params.id);
    this.setState( { selectedPost });

    let readMore = [selectedPost];
    for (var i = 0; i < 4; i++) {
      readMore.push(posts[i]);
    }
    this.setState({ readMore })
  }

  postContentComp = () => {
    const { selectedPost } = this.state;

    return (
      <div className="post-content">
        <h1 className="post-title">{selectedPost.title}</h1>
        <p className="post-body">{selectedPost.body}</p>
      </div>
    )
  }

  Voltar = () => {
    return (
      <Link to ='/' className="Voltar"> Voltar </Link>
    )
  }

  render() {
    return (
      <div>
        Pagina dos Posts
        <this.postContentComp />
        <this.Voltar />
      </div>
    )
  }
}

export default PostPage;