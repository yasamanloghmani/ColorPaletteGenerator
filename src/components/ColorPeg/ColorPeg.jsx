import React, { Component } from 'react';
import './ColorPeg.css'
import reactCSS from 'reactcss'
import ReactDOM from 'react-dom'
class ColorPeg extends Component{
    
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
                },
              })
        return (
            <div className='ColorPeg' style={styles.card} >
                <p className='hide'>
                    {this.props.color}
                </p>
            </div>
        );
    }
}


export default ColorPeg;