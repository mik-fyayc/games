import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';


interface MyProps {
  gamesStore?: any
}

interface MyState {}

@inject('gamesStore')
@observer
class App extends Component <MyProps, MyState>  {

  componentDidMount() {
    //this.props.gamesStore.fetchGames();
  }

  render() {
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
}

export default App;
