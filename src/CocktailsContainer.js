import React from 'react'
import CocktailList from './CocktailList'
import CocktailDisplay from './CocktailDisplay'
import CocktailForm from './CocktailForm'



class CocktailsContainer extends React.Component{
  state= {
    cocktails:[],
    cocktail:{},
    proportions:[],
    filteredDrinks:[],
    ingredients:[]
  }

  componentDidMount(){
    this.fetchCocktails()
    this.fetchIngredients()
  }

fetchIngredients = ()=>{
  fetch("http://localhost:3000/api/v1/ingredients")
  .then(res => res.json())
  .then(ingredients => this.setState({
    ingredients:ingredients
  }))
}
  fetchCocktails = ()=>{
    fetch("http://localhost:3000/api/v1/cocktails")
    .then(res => res.json())
    .then(cocktails =>this.setState({
      cocktails:cocktails,
      filteredDrinks:cocktails
    }))
  }

  fetchDetails=(cocktail)=>{
    fetch(`http://localhost:3000/api/v1/cocktails/${cocktail.id}`)
    .then(res => res.json())
    .then(cocktailInfo => this.setState({
      cocktail:cocktailInfo,
      proportions:cocktailInfo.proportions
    }))
  }

  filterCocktails = (term)=>{
    console.log(this.state.filteredDrinks);
    let filteredDrinks= this.state.filteredDrinks.filter(cocktail=>{
      return cocktail.name.toLowerCase().match(term)
    })
    this.setState({
      cocktails:filteredDrinks
    })
  }

  deleteCocktail = (drink)=>{
    console.log("DrinkId:",drink.id);
    let cocktailId = drink.id
    // let deleteArr = this.state.cocktails.filter(cocktail=> cocktail!== drink )
    // this.setState({
    //   cocktails:deleteArr
    // })
    fetch(`http://localhost:3000/api/v1/cocktails/${cocktailId}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(cocktails=>this.setState({
      cocktails:cocktails
    }))

  }

  handleSubmit =(newDrink)=>{
    console.log(newDrink)
    let newArr = [...this.state.cocktails, newDrink]
    this.setState({
      cocktails:newArr
    })
    fetch("http://localhost:3000/api/v1/cocktails",{
      method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newDrink.name,
      description: newDrink.description,
      instructions:newDrink.instructions,
      source:newDrink.source,
      proportions:newDrink.proportions})
    })

  }
  render(){
    console.log(this.state.ingredients);
    return(
      <div>
      <CocktailList fetchDetails={this.fetchDetails}cocktails={this.state.cocktails} filterCocktails={this.filterCocktails}/>
      <CocktailDisplay cocktail={this.state.cocktail} proportions={this.state.proportions} deleteCocktail={this.deleteCocktail}/>
      <CocktailForm handleSubmit={this.handleSubmit} ingredients={this.state.ingredients}/>
      </div>
    )
  }
}
export default CocktailsContainer
