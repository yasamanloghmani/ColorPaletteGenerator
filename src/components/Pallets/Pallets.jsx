import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import './Pallets.css'
import reactCSS from 'reactcss'

class Pallets extends Component{
    render(){
        
          const colors = ['red', 'blue', 'green', 'black', 'orange', 'purple']
        return (
            <div className='Pallets'>
                {colors.map((color, index) => {
                    return <ColorPeg color={color}>{color}</ColorPeg>
                 })}
            </div>
        );
    }
}


export default Pallets;