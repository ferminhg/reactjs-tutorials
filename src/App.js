import './App.css';
import List from './components/List'
import Header from './components/Header'
import Footer from './components/Footer'
import React ,{ Component } from 'react';

class App extends Component{
  render() {
    return (
    <React.Fragment>
      <Header />
      <List />
      <Footer />
    </React.Fragment>);
  }
}

export default App;
