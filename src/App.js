import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode]=useState("light")
  const [alert,setAlert]=useState({
    msg:null,
    type:null
  })

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  
  const handleModeToggle=()=>{
        if(mode==="light"){
          setMode("dark")
          showAlert("Dark mode Acivated","success")
        }
        else{ 
          setMode("light")
          showAlert("Light mode Activated", "success")
        }
  }

  const lightModeStyle={
    color:"black",
    backgroundColor:"white"
  }

  const darkModeStyle={
    color:"white",
    backgroundColor:"rgb(36, 36, 50)"
  }

  return (
    <Router>
    <div className='main-div' style={mode==="light"?lightModeStyle:darkModeStyle}>
      <Navbar mode={mode} handleSwitchOnChange={handleModeToggle}/>
      <Alert alert={alert}/>
      
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
