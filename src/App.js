import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

import './App.css'
import { Swatch } from 'node-vibrant/lib/color';
import reactCSS from 'reactcss'
import Pallets from './components/Pallets/Pallets'

class App extends Component {
 

  render() {
   
    return (
      <div className='App'>
        <header>
          <h1>
            Little Cute
          </h1>
        </header>
        
      <Pallets/>
      
      </div>
      
    );
}
}

export default App