import React from 'react'


class Cocktail extends React.Component{
  render(){
    return(
      <div>
      <h3>{this.props.cocktail.name}</h3>
      </div>
    )
  }
}
export default Cocktail
