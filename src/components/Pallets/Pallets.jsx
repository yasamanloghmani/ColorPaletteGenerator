import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import { SketchPicker, SwatchesPicker, MaterialPicker } from 'react-color';
import './Pallets.css'

class Pallets extends Component{
    state = {
        background: '#f35c87',
        colors : ['#f35c87', '#20639b', '#3caea3', '#f6d55c', '#ed553b', '#17bfd1'],
        id : 0
    }
    
    handleChange = (color) => {
        this.setState({ background: color.hex });
        this.state.colors[this.state.id] = color.hex
       

    }
    handlePickColor = (e) => {
        const diva = e.target
        let colorPick = diva.style.backgroundColor;
        colorPick = colorPick.toString();
        this.setState({background : colorPick})
        this.setState({id : diva.id})
    }
    render(){
        
          
        return (
            <div>
                 <main>
                    <section>
                    <SwatchesPicker color={ this.state.background }
                            onChange={ this.handleChange}
                            height='100%'
                            
                    ></SwatchesPicker>
                    </section>
                    <div className='Pallets' onClick={this.handlePickColor}>
                        {this.state.colors.map((color, index) => {
                            return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                            </ColorPeg>
                        })}
                    </div>
                    <section >
                    <SketchPicker
                            color={ this.state.background }
                            onChange={ this.handleChange }
                            width='60%'

                    /> 
                    <div className='marg'>
                    <MaterialPicker color={ this.state.background }
                            onChange={ this.handleChange }
                            
                    ></MaterialPicker> 
                    </div>
                    
                    </section>
                </main>
            </div>
            
           
        );
    }
}


export default Pallets;