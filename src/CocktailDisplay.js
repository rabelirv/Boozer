import React from 'react'
import {Panel, Button, ListGroupItem, ListGroup} from 'react-bootstrap'

class CocktailDisplay extends React.Component{
  state = {
  open: true
  }
  render(){
    console.log(this.props);
  let proportions = this.props.proportions.map(proportion =>{
    return (
      <div>
      <ListGroupItem>Ingridients:{proportion.ingredient_name}</ListGroupItem>
      <ListGroupItem>Amount:{proportion.amount}</ListGroupItem>
      </div>
    )
  })

   return (
     <div>
       <Button onClick={() => this.setState({ open: !this.state.open })}>
         Click to toggle
       </Button>
       <br />
       <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
       <Panel.Heading>
            <Panel.Title toggle>
              {this.props.cocktail.name}
            </Panel.Title>
          </Panel.Heading>
         <Panel.Collapse>
           <Panel.Body>
             {this.props.cocktail.instructions}
           </Panel.Body>
         </Panel.Collapse>
       </Panel>
       <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
       <Panel.Heading>
            <Panel.Title toggle>
              Description
            </Panel.Title>
          </Panel.Heading>
         <Panel.Collapse>
           <Panel.Body>
             {this.props.cocktail.description}
           </Panel.Body>
         </Panel.Collapse>
       </Panel>
      <Panel.Heading>Source:{this.props.cocktail.source}</Panel.Heading>
      <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
        <Panel.Heading>Proportions</Panel.Heading>
        <Panel.Body>Here Are The Item For Your Drink!</Panel.Body>
        <Panel.Collapse>
        <ListGroup>
          {proportions}
        </ListGroup>
        </Panel.Collapse>
      </Panel>

      <Button onClick={()=>this.props.deleteCocktail(this.props.cocktail)}>Delete</Button>
      </div>
    )
  }
}
export default CocktailDisplay
