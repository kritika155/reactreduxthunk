import React,{Component }from 'react';
import logo from './logo.svg';
import './App.css';
import GithubData from './containers/GithubData';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" >
          <div className="col-md-6">
            <GithubData />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
