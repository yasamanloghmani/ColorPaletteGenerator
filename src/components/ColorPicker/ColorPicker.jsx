import React, { Component } from 'react';
import { SketchPicker, SwatchesPicker } from 'react-color';



class ColorPicker extends Component{
    state = {
        background: this.props.colorPick,
      }
    
      handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        console.log(this.props.colorPick)
      }
    render(){
        
        return (
            <div className='Picker'>
                    <SketchPicker
                            color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                        />
                        <SwatchesPicker color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                            
                        ></SwatchesPicker>
            </div>
        );
    }
}


export default ColorPicker;