import React from 'react'
import Cocktail from './Cocktail'
import SearchForm from './SearchForm'
import {Nav, NavDropdown, MenuItem, Navbar} from 'react-bootstrap';

class CocktailList extends React.Component {

  handleSelect = (e) => {
    this.props.fetchDetails(e)
  }
  render() {
    let list = this.props.cocktails.map(cocktail => {
      return (<MenuItem eventKey={cocktail}>
        <Cocktail key={cocktail.id} cocktail={cocktail}/>
      </MenuItem>)
    })
    return (<Nav bsStyle="tabs" activeKey="1" onSelect={e => this.handleSelect(e)} pullRight>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Home</a>
        </Navbar.Brand>
      </Navbar.Header>
      <NavDropdown className="dropdown" eventKey="4" title="Dropdown" id="nav-dropdown">
        <SearchForm filterCocktails={this.props.filterCocktails}/>
        {list}
      </NavDropdown>
    </Nav>)
  }
}
export default CocktailList
