import React, { Component } from 'react';
import api from '../../services/api'

class PostPage extends Component {
  state = {
    userPosts: [],
    selectedPost: {}
  }

  async componentDidMount() {
    let params = this.props.match.params;
    let res = await api.get(`?userId=${params.userId}`);

    this.setState( { userPosts: res.data }); 
    let selectedPost = this.state.userPosts.find(item => item.id == params.id);

    this.setState( { selectedPost });
  }

  postContent = () => {
    const { selectedPost } = this.state;

    return (
      <div className="post-content">
        <h1 className="post-title">{selectedPost.title}</h1>
        <p className="post-body">{selectedPost.body}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        Pagina dos Posts
        <this.postContent />
      </div>
    )
  }
}

export default PostPage;