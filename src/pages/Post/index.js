import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

class PostPage extends Component {
  state = {
    posts: [],
    selectedPost: {},
    readMore: [],

    cont: 0,
  };

  async componentDidMount() {
    let params = this.props.match.params;

    let res = await api.get();
    this.setState({ posts: res.data });

    let { posts } = this.state;
    let selectedPost = posts.find((item) => item.id.toString() === params.id);

    this.setState({ selectedPost });

    let readMore = [selectedPost];
    for (var i = 0; i < 4; i++) {
      readMore.push(posts[i]);
    }
    this.setState({ readMore });
  }

  postContentComp = () => {
    const { selectedPost } = this.state;

    return (
      <div id="post-content">
        <h1 id="post-title">{selectedPost.title}</h1>
        <p id="post-body">{selectedPost.body}</p>
        <Link to="/">
          <button id="voltar-btn"> Voltar </button>{" "}
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div id="post-main-comp">
        <this.postContentComp />
      </div>
    );
  }
}

export default PostPage;
