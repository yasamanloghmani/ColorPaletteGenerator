import React from "react";
import Colors from "./Colors";
import { Navbar, Form, Nav, FormControl, NavDropdown } from "react-bootstrap";


const tinycolor = require("tinycolor2");

export default function Palette({ hex, variation, setting, settingValue, changeHex,
    changeVariation, changeSetting, changeSettingValue }) {
    // Setting handler
    const handleHexChange = e => {
        e.preventDefault();
        changeHex(e.target.value);
    };
    
    const handleVariationChange = variation => {
        changeVariation(variation);
    };
    
    const changeSettings = e => {
        const setting = e.target.getAttribute("value");
        changeSetting(setting);
    };
    
    const setRandom = () => {
        const randomColor = tinycolor.random().toHexString();
        changeHex(randomColor);
    };

    //  Schema colors handler 
    let colors;
  // Using a switch to set variation type set
  switch (variation) {
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "analogous":
      colors = tinycolor(hex).analogous();
      break;
    case "monochromatic":
      colors = tinycolor(hex).monochromatic();
      break;
    case "splitcomplement":
      colors = tinycolor(hex).splitcomplement();
      break;
    case "triad":
      colors = tinycolor(hex).triad();
      break;
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "complement":
      colors = tinycolor(hex).complement().toHexString();
      break;
  }

  // Using a dictionary object to set setting
  const settings = color => {
    const converter = {
      lighten: tinycolor(color).lighten(settingValue).toString(),
      brighten: tinycolor(color).brighten(settingValue).toString(),
      darken: tinycolor(color).darken(settingValue).toString(),
      desaturate: tinycolor(color).desaturate(settingValue).toString(),
      saturate: tinycolor(color).saturate(settingValue).toString(),
      greyscale: tinycolor(color).greyscale(settingValue).toString(),
      undefined: color,
    };

    return converter[setting];
  };

  let colorPalette;
  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  } else {
    colorPalette = colors.map(t => {
      let hexColor = t.toHexString();

      hexColor = settings(hexColor);

      return <Colors hex={hexColor} />;
    });
  }

  return(
      <section>
        <div>
        <Navbar expand="lg" bg="light" variant="light">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavDropdown
              onSelect={e => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />

            <Nav.Link
              value={"lighten"}
              eventKey={"lighten"}
              onClick={e => changeSettings(e)}
            >
              Lighten
            </Nav.Link>
            <Nav.Link value={"brighten"} onClick={e => changeSettings(e)}>
              Brighten
            </Nav.Link>
            <Nav.Link value={"darken"} onClick={e => changeSettings(e)}>
              Darken
            </Nav.Link>
            <Nav.Link value={"desaturate"} onClick={e => changeSettings(e)}>
              Desaturate
            </Nav.Link>
            <Nav.Link value={"saturate"} onClick={e => changeSettings(e)}>
              Saturate
            </Nav.Link>
            <Nav.Link value={"greyscale"} onClick={e => changeSettings(e)}>
              Greyscale
            </Nav.Link>
            <Nav.Link id="random" onClick={() => setRandom()}>
                Random
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
        
        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
        </div>
        <main>
            <div></div>
            <div className='Pallets'>{colorPalette}</div>
            <div></div>
        </main>
        

      </section>
  
  ) 
}