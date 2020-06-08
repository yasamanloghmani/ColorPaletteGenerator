import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import ColorPicker from '../ColorPicker/ColorPicker'
import { SketchPicker, SwatchesPicker } from 'react-color';
import './Pallets.css'
import ReactDOM from 'react-dom'
import reactCSS from 'reactcss'

class Pallets extends Component{
    state = {
        background: '#f35c87',
        colors : ['#f35c87', '#20639b', '#3caea3', '#f6d55c', '#ed553b', '#17bfd1'],
        id : 0
    }
    
    handleChangeComplete = (color) => {
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
                    <section></section>
                    <div className='Pallets' onClick={this.handlePickColor}>
                        {this.state.colors.map((color, index) => {
                            return <ColorPeg color={color} key={index} id={index}>{color}</ColorPeg>
                        })}
                    </div>
                    <section >
                    <SketchPicker
                            color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                    />
                     <SwatchesPicker color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                            
                        ></SwatchesPicker>
                        
                    </section>
                </main>
            </div>
            
           
        );
    }
}


export default Pallets;