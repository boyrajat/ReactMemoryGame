import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Jumbotron from './components/jumbotron/jumbotron.js';
import Cardcontainer from './components/cardcontainer/cardcontainer.js';
import Footer from './components/footer/footer.js';
import CardItems from './components/carditems/carditems.js';
import gifs from './gifs.json';
class App extends Component {
  state = {
  gifs: gifs,
  score : 0,
  topScore : 0
  };

  sortGifs = (id, clicked) => {

    const gifOrder = this.state.gifs;

    if (clicked) {
      gifOrder.forEach((img, index) => {
        gifOrder[index].clicked = false;

      });
      return this.setState({
        gifs: gifOrder.sort(() => Math.random() - 0.5),
        topScore: this.state.score,
        score: 0
      })
    }

    else {
      gifOrder.forEach((gifs, index) => {
        if(id === gifs.id) {
          gifOrder[index].clicked = true;
        }
      });
      return this.setState({gifs: gifOrder.sort(() => Math.random() - 0.5), score: this.state.score + 1})
  }
};


  render() {
    return (
      <div className='container-fluid'>
      <Navbar
        score = {this.state.score}
        topScore = {this.state.topScore}
      />
      <Jumbotron />
      <Cardcontainer>
        {this.state.gifs.map(gifs => (
            <CardItems
            key={gifs.id}
            sortGifs={this.sortGifs}
            id={gifs.id}
            src={gifs.image}
            clicked={gifs.clicked}
            />
))}
         

        </Cardcontainer>

      <Footer />
      </div>
      );
  }
}

export default App;
