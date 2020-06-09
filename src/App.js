import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Pallets from './components/Pallets/Pallets'
import Schema from './components/Schema/Schema'

class App extends Component {
 

  render() {
   
    return (
      <div className='App'>
        <header>
          <h1>
            cute colors
          </h1>
          <ul>
            <Link to='/ColorPaletteGenerator'>Create Color Schema</Link>
            <Link to='/ColorPaletteGenerator/pallet'>Create Yout Pallet</Link>
            </ul>
        </header>
        <Switch>
          <Route exact path='/ColorPaletteGenerator' render={() => <Schema></Schema>} />
          <Route exact path='/ColorPaletteGenerator/pallet' render={() => <Pallets></Pallets>} /> 
        </Switch>
    
      </div>
      
    );
}
}

export default App