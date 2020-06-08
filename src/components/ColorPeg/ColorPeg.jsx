import React, { Component } from 'react';
import './ColorPeg.css'
import reactCSS from 'reactcss'
import {  HuePicker } from 'react-color';
class ColorPeg extends Component{
    showHuePicker = (e) => {
        const target = e.target
        const huePicker = target.querySelector('p')
        console.log(huePicker)
        huePicker.style.display = 'block'
    }
    hideHuePicker = (e) => {
        const target = e.target
        const huePicker = target.querySelector('p')
        huePicker.style.display = 'none'
    }
    render(){
        const styles = reactCSS({
                'default': {
                  card: {
                    backgroundColor: this.props.color,
                    boxShadow: '0 2px 4px rgba(0,0,0,.15)',

                  },
                  title: {
                    fontSize: '2.8rem',
                    color: 'red',
                  },
                  picker: {
                      margin: '10px auto',
                  }
                },
              })
        return (
            <div className='ColorPeg' style={styles.card} id={this.props.id} onMouseOver={this.showHuePicker}  onMouseOut={this.hideHuePicker} >
               <div>
                   <p className='colorCode'>
                       {this.props.color}
                   </p>
               </div>
            </div>
        );
    }
}


export default ColorPeg;