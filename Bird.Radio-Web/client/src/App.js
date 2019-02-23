import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import socketIOClient from 'socket.io-client';

class App extends Component {

  state = {
    data: null,
    response: false,
    endpoint: "http://localhost:5000"
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('hi', function(msg) {
      console.log(msg)
    })
    // socket.on('connection', function(socket){
    //   console.log('a user connected');
    //   socket.on('disconnect', function(){
    //     console.log('user disconnected');
    //   });
    // });

    this.testFetch();
  }

  testFetch() {
    const requestHeaders = new window.Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })

    fetch('/testeroo', { method: 'GET', headers: requestHeaders })
      .then(response => {
        if (!response.ok) { throw new Error(response.status) }
        return response
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          data: data.express
        })
      })
      .catch(error => {
        console.log(error.message)
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
