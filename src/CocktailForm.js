import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'

class CocktailForm extends React.Component {

    state = {
      name: '',
      description:'',
      instructions:'',
      source:'',
      proportions:[],
    }


  getValidationState() {
    const length = this.state.name.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  addProportion = () => {
    let proportion = {amount: "", ingredient_id: "1"}
    this.setState({
      proportions: [...this.state.proportions, proportion]
    })
  }
  changeProportionHandler = (event, index) => {
    let newProportions = this.state.proportions.map((proportion, idx) => {
      if (idx === index) {
        proportion[event.target.name] = event.target.value
      }
      return proportion
    })
    this.setState({
      proportions: newProportions
    })
  }

  handleChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddProportion = () => {
    this.setState({
      proportions: this.state.proportions.concat([{ amount: '', ingredient_id:1}])
    });
  }

  handleAmountChange = (idx) => (evt) => {
    const newProportions = this.state.proportions.map((proportion, sidx) => {
      if (idx !== sidx) return proportion;
      return { ...proportion, amount: evt.target.value };
    });

    this.setState({ proportions: newProportions });
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e);
    this.props.handleSubmit(this.state)
  }

  handleRemoveProportion = (idx) => () => {
      this.setState({
        proportions: this.state.proportions.filter((s, sidx) => idx !== sidx)
      });
    }

    handleIngredientChange = (idx) => (evt) => {
      const newProportions = this.state.proportions.map((proportion, sidx) => {
        if (idx !== sidx) return proportion;
        return { ...proportion, ingredient_id: evt.target.value };
      });

      this.setState({ proportions: newProportions });
    }
  render() {
    let list = this.props.ingredients.map(ingredient =>{
      return <option value={ingredient.id}>{ingredient.name}</option>
    })
    return (
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        <h2> Enter New Drink!</h2>
        <br/>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Name:</ControlLabel>
          <FormControl
          name="name"
            type="text"
            value={this.state.name}
            placeholder="Enter text"
            onChange={(e)=>this.handleChange(e)}
          />
          <FormControl.Feedback />
          <ControlLabel>Description:</ControlLabel>
          <FormControl
          name="description"
            type="text"
            value={this.state.description}
            placeholder="Enter Description"
            onChange={(e)=>this.handleChange(e)}
          />
          <FormControl.Feedback />
          <ControlLabel>Instructions:</ControlLabel>
          <FormControl
          name="instructions"
            type="text"
            value={this.state.instructions}
            placeholder="Enter Instructions"
            onChange={(e)=>this.handleChange(e)}
          />
          <FormControl.Feedback />
          <ControlLabel>Source:</ControlLabel>
          <FormControl
          name="source"
            type="text"
            value={this.state.source}
            placeholder="Enter Source"
            onChange={(e)=>this.handleChange(e)}
          />
          <FormControl.Feedback />

          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <ControlLabel>Proportions:</ControlLabel>

        {this.state.proportions.map((proportion, idx) => (
          <div className="proportion">
          <FormControl
          name="proportions"
            type="text"
            value={proportion.amount}
            placeholder={`Proportion #${idx + 1} name`}
            onChange={this.handleAmountChange(idx)}
          />
          <ControlLabel>Ingredients</ControlLabel>
      <FormControl componentClass="select" placeholder="select" name="proportions"
        type="text"
        onChange={this.handleIngredientChange(idx)}>
        {list}
      </FormControl>

            <Button type="button" onClick={this.handleRemoveProportion(idx)} className="small">-</Button>
          </div>
        ))}
        <Button type="button" onClick={this.handleAddProportion} className="small">Add Proportion</Button>
        <Button type="submit">Make Drink!</Button>
      </form>
    );
  }
}

export default CocktailForm
