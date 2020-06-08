import React, { Component } from 'react';
import ColorPeg from '../ColorPeg/ColorPeg'
import { SketchPicker, SwatchesPicker, MaterialPicker } from 'react-color';
import './Pallets.css'
import ImageUploader from 'react-images-upload';





class Pallets extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
             pictures: '',
             background: '#f35c87',
        colors : ['#845EC2', '#845EC2', '#FF9671', '#FFC75F', '#B39CD0', '#00C9A7'],
        id : 0,
        p1 : ['#845EC2', '#EDC0FF','#7652B4', '#08004F', '#07226F' , '#1DC0FF'],
        p2 : ['#356275', '#98AFBA','#657A85', '#6E546C', '#08A1BA', '#A56875' ],
        p3 : ['#8F4454', '#7E4564','#66486C', '#4E4A6C', '#00486C', '#1E406C' ],
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
                 <main>
                    <section>
                    <SwatchesPicker color={ this.state.background }
                            onChange={ this.handleChange}
                            height='100%'
                            
                    ></SwatchesPicker>
                    
                    </section>
                    <div className='sections'>
                        <div className='Pallets' onClick={this.handlePickColor}>
                            {this.state.colors.map((color, index) => {
                                return <ColorPeg color={color} key={index} id={index} onChangen={ this.handleChange}>
                                </ColorPeg>
                            })}
                        </div>
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
                <div>
                    <h1>Some famouse Pallets</h1>
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