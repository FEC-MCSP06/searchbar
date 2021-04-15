import './App.css';
import Searchbar from './Components/Searchbar'
const { React, Component } = require('react')

class App extends Component {
  state = {
    videoKey : null,
    userInput : null
  }

  handleSearchButton = async (e) => {
    e.preventDefault();
    const input = e.target[0].value
    this.setState({userInput : input})
    const response = await fetch(`http://localhost:3202/api/searchbar/${input}`)
    if(response.status !== 200){
      e.target[0].value = `Error Encountered`
      return
    }
    const responseJson = await response.json();
    if(responseJson.length !== 0){
      e.target[0].value = `Your videoKey is: ${responseJson[0].videokey}`
      this.setState({
        videoKey : responseJson[0].videokey
      })
    }else{
      e.target[0].value = `No Results Found.`
    }
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
