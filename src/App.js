import React, { Component} from 'react';
import CocktailsContainer from './CocktailsContainer'
import './App.css';

// const theme= createMuiTheme({
//   primary: {
//     type: 'dark'}
// })

class App extends Component {
  render() {
    return (
      <div>
        <CocktailsContainer/>
        </div>
    )
  }
}

export default App;
