import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorPeg.css'
import reactCSS from 'reactcss'

class ColorPeg extends Component{
    state = {
        value: '',
        copied: false,
      };
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
                },
              })
        return (
            <div className='ColorPeg' style={styles.card} id={this.props.id} onMouseOver={this.showHuePicker}  onMouseOut={this.hideHuePicker} >
               <div className='pContainer'>
                   <p className='colorCode'>
                       {this.props.color}
                   </p>
                   <div value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})}>Copy from here</div>
               </div>
               <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
            </div>
        );
    }
}


export default ColorPeg;