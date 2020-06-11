import React,{ useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Pallets from './components/Pallets/Pallets'
import Schema from './components/Schema/Schema'

function App() {
  const [hex, changeHex] = useState("#004444");
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
            {/* <Menu>

            </Menu> */}
            </ul>
        </header>
        {/* <Switch> */}
          {/* <Route exact path='/ColorPaletteGenerator' render={() => */}
              <Schema
                settingValue={settingValue}
                setting={setting}
                variation={variation}
                hex={hex}
                changeSetting={changeSetting}
                changeVariation={changeVariation}
                changeHex={changeHex}
                changeSettingValue={changeSettingValue}
              />
              
              {/* } /> */}
          {/* <Route exact path='/ColorPaletteGenerator/pallet' render={() =>  */}
          <Pallets></Pallets>
          {/* } />  */}
        {/* </Switch> */}
    
      </div>
      
    )

}

export default App