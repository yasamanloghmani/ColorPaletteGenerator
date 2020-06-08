import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import './Pallets.css'
import ReactDOM from 'react-dom'
import reactCSS from 'reactcss'

class Pallets extends Component{
    ShowColor = (e) => {
        const par = e.target
        const par1 = par.querySelector('p')
        par1.style.display = 'block';
    }
    HideColor = (e) => {
        const par = e.target
        const par1 = par.querySelector('p')
        par1.style.display = 'none';
    }
    render(){
        
          const colors = ['#112233', 'blue', 'green', 'black', 'orange', 'purple']
        return (
            <div className='Pallets' onMouseOver={this.ShowColor} onMouseOut={this.HideColor}>
                {colors.map((color, index) => {
                    return <ColorPeg color={color} key={index}>{color}</ColorPeg>
                 })}
            </div>
        );
    }
}


export default Pallets;