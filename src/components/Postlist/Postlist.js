import React, { Component } from 'react';
import api from '../../services/api'

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
        <article className="post-item" key={post.id}>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-text">{post.body}</p>
        </article>
      ))}
    </div>
    );
  }
}

export default Postlist;
