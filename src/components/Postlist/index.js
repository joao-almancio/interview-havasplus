import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'

class Postlist extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () =>{
    let res = await api.get();
    this.setState({ data: res.data });
  }

  render() {
    return (
    <div className="post-list">
      {this.state.data.map(post => (
        <Link to={`/post/${post.id}`}>
          <article className="post-item" key={post.id}>
          <strong className="post-title">{post.title}</strong>
          </article>
        </Link>
      ))}
    </div>
    );
  }
}

export default Postlist;
