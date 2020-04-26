import React, {Component} from 'react';
import Postlist from '../components/Postlist/Postlist'

class Main extends Component {
  render() {
    return (
      <main id="conteudo-principal"> 
      <p>Texto do main</p>
      <Postlist />
      </main>
    )
  }
}

export default Main;