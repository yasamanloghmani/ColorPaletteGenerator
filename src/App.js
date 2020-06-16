import React,{ useState } from 'react'
import './App.css'
import Pallets from './components/Pallets/Pallets'
import Schema from './components/Schema/Schema'

function App() {
  const [hex, changeHex] = useState("#F44336");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);
   
    return (
      <div className='App'>
        <header>
          <h1>
            cute colors
          </h1>
        </header>

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
          <Pallets></Pallets>

    
      </div>
      
    )

}

export default App