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
          <strong className="post-title">{post.title}</strong>
        </article>
      ))}
    </div>
    );
  }
}

export default Postlist;
