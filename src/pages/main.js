import React, {Component} from 'react';
import api from '../services/api';

class Main extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
     this.loadPosts();
  }

  async loadPosts() {
    let res = await api.get();
    this.setState({data: res.data});
  }

  render() {
    return (
      <main id="conteudo-principal">Texto do conteudo principal</main>
    )
  }
}

export default Main;