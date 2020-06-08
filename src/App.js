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
            cute colors
          </h1>
          <img className='logoimg' src='https://i.pinimg.com/originals/12/77/06/127706c539de1269e564738759fd7a44.jpg'></img>
        </header>
        
      <Pallets/>
      
      </div>
      
    );
}
}

export default App