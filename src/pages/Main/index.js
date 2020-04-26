import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api'

class MainPage extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    let res = await api.get();
    this.setState({ data: res.data });
  }

  listComponent = () => {
    return (
      <div className="post-list">
        {this.state.data.map(post => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <article className="post-item">
            <strong className="post-title">{post.title}</strong>
            </article>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
      <this.listComponent />
    </div>
    )
  }
}

export default MainPage;