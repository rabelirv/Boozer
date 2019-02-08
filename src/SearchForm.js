import React from 'react'
import {ControlLabel, FormControl} from 'react-bootstrap'


class SearchForm extends React.Component{


  handleChange = (e)=> {
  let term = e.target.value
    this.props.filterCocktails(term)
  }
  render(){
    return(
      <form>
      <ControlLabel>Search:</ControlLabel>
      <FormControl
      name="term"
        type="text"
        placeholder="Search"
        onChange={this.handleChange}
      />
      </form>
    )
  }
}

export default SearchForm
