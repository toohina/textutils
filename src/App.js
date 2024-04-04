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
  
  const handleModeToggle=()=>{
        if(mode==="light")setMode("dark")
        else setMode("light")
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
      <Alert/>
      
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
