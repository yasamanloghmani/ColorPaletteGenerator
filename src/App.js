import React,{ useState } from 'react'
import './App.css'
import Pallets from './components/Pallets/Pallets'
import Schema from './components/Schema/Schema'
import logo from './cl.png'

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
          <img src={logo} className/>
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
          <footer className='headerbg'>
            <p>Build by<a href='https://yasamanloghmani.com'>YasamanLoghmani</a></p>
          </footer>
    
      </div>
      
    )

}

export default App