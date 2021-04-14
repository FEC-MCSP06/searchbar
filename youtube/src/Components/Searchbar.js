import Searchbutton from './Searchbutton'
const { React, Component, Fragment } = require('react')

class Searchbar extends Component{
    render(){
        return(
            <form onSubmit={(event) => this.props.handleSearchButton(event)}>
                <input id="searchbar" type="text" placeholder="Search"/>
                <Searchbutton />
            </form>
            
        )
    }
}

export default Searchbar