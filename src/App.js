import React,{ useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Pallets from './components/Pallets/Pallets'
import Schema from './components/Schema/Schema'

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);
   
    return (
      <div className='App'>
        <header>
          <h1>
            cute colors
          </h1>
          <ul>
            <Link to='/ColorPaletteGenerator'>Create Color Schema</Link>
            <Link to='/ColorPaletteGenerator/pallet'>Create Yout Pallet</Link>
            </ul>
        </header>
        <Switch>
          <Route exact path='/ColorPaletteGenerator' render={() =>
              <Schema
                settingValue={settingValue}
                setting={setting}
                variation={variation}
                hex={hex}
              />} />
          <Route exact path='/ColorPaletteGenerator/pallet' render={() => <Pallets></Pallets>} /> 
        </Switch>
    
      </div>
      
    )

}

export default App