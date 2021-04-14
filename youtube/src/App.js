import './App.css';
import Searchbar from './Components/Searchbar'
const { React, Component } = require('react')

class App extends Component {
  state = {
    videoKey : null,
    userInput : null
  }

  handleSearchButton = (e) => {
    e.preventDefault();
    const input = e.target[0].value
    this.setState({userInput : input})
    e.target[0].value = `Search for '${input}' was a success.`
  }

  render(){
    return (
      <div className="App">
        <Searchbar handleSearchButton={this.handleSearchButton}/>
      </div>
    );
  }
}

export default App;
