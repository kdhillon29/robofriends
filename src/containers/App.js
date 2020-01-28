import React from 'react';
import 'tachyons';
//import React, { PureComponent } from 'react'
import Cardlist from '../components/cardlist';

import Searchbar from '../components/searchbar';
import 'tachyons';
import './app.css';
import Scroll from '../components/scroll';
import ErrorBoundary from './errorboundary';


//change in appjs1

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  handleChange = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      this.setState({ searchfield: value });

    }
    else {
       this.setState({ searchfield: "" });

    }

  };
  componentDidMount() {
    console.log("in did mount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(er => console.log(er))
  }




  render() {
    const { robots, searchfield } = this.state;
   // if(true) throw new Error("error has occured");
    let srobots = robots.filter(robot => {
      return robot.username.toLowerCase().includes(searchfield.toLowerCase())
    });



    return (
      !robots.length ? <h1>Loading...</h1> :
        <div className="tc">
          <div className=" bg-light-green ">
            <h1 className=" pa4 mt0 f1 "> Robo Friends</h1>
            <Searchbar onChange={this.handleChange} />
          </div>
          <Scroll>
            <ErrorBoundary> 
            <Cardlist robots={srobots} />
            </ErrorBoundary>
          </Scroll>

        </div>
    );



  }
}
export default App;
