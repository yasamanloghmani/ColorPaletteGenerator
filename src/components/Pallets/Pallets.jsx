import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import { SwatchesPicker, MaterialPicker, ChromePicker, GithubPicker } from 'react-color';
import './Pallets.css'
// import ImageUploader from 'react-images-upload';

class Pallets extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
             pictures: '',
             background: '#f35c87',
        colors : ['#D4295A', '#845EC2', '#FF9671', '#FFC75F', '#B39CD0', '#00C9A7'],
        id : 0,
        p1 : ['#feda75', '#fa7e1e','#d62976', '#962fbf', '#4f5bd5' , '#1DC0FF'],
        p2 : ['#007777', '#006666','#005555', '#004444', '#003333', '#002222'],
        p3 : ['	#ffd4e5', '#d4ffea','#eecbff', '#feffa3', '#dbdcff', '#FFCCBC' ],
             };
             
        this.onDrop = this.onDrop.bind(this);
    }


    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureDataURLs
        });
        
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
                <section className='headerbg'>
                    <p>
                        Change each peg's color by clicking to built your new pallete.
                    </p>
                </section>
                 <main>
                    <section>
                    <SwatchesPicker color={ this.state.background }
                            onChange={ this.handleChange}
                            height='240px'
                            className='swatches'
                    ></SwatchesPicker>
                    
                    </section>
                    <div className='sections'>
                        <div className='Pallets' onClick={this.handlePickColor}>
                            {this.state.colors.map((color, index) => {
                                return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                                </ColorPeg>
                            })}
                        </div>
                        <GithubPicker color={ this.state.background }
                            onChange={ this.handleChange }
                            width='200px'
                            className='marg'
                            />
                        {/* <ImageUploader
                        className='uploader'
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <img src={this.state.pictures}></img> */}




                    </div>
                    
                    <section >
                    <ChromePicker
                            color={ this.state.background }
                            onChange={ this.handleChange }
                            height='250px'
                            disableAlpha='false'
                            className='margin'

                    /> 
                    </section>
                </main>
                <section className='headerbg'>
                    <p>
                        Famouse Pallets.
                    </p>
                </section>
                <div className='palletEX'>
                    
                    <div className='Pallets' onClick={this.handlePickColor}>
                            {this.state.p1.map((color, index) => {
                                return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                                </ColorPeg>
                            })}
                        </div>
                        <div className='Pallets' onClick={this.handlePickColor}>
                            {this.state.p2.map((color, index) => {
                                return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                                </ColorPeg>
                            })}
                        </div>
                        <div className='Pallets' onClick={this.handlePickColor}>
                            {this.state.p3.map((color, index) => {
                                return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                                </ColorPeg>
                            })}
                        </div>

                </div>
            </div>
            
           
        );
    }
}


export default Pallets;