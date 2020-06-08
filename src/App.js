import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { SketchPicker, SwatchesPicker } from 'react-color';
import './App.css'
import { Swatch } from 'node-vibrant/lib/color';
import reactCSS from 'reactcss'
import Pallets from './components/Pallets/Pallets'

class App extends Component {
  state = {
    background: 'red',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
   
    return (
      <div>
        {/* <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
      <SwatchesPicker color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
        
        ></SwatchesPicker> */}
        {/* <div style={ styles.card } className='hi'>
        <div style={ styles.title }>
          { this.props.title }
        </div>

        { this.props.children }
      </div> */}
      <Pallets></Pallets>
      </div>
      
    );
}
}

export default App