
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
import React, { useState } from 'react'
import Alert from './Component/Alert';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"


function App() {
  const[mode, setMode] = useState("light")

const removecolor =()=>{
  document.body.classList.remove("bg-light")
  document.body.classList.remove("bg-dark")
  document.body.classList.remove("bg-success")
  document.body.classList.remove("bg-warning")
  document.body.classList.remove("bg-info")
  document.body.classList.remove("bg-danger")
}

  const toggle =(cls)=>{
    removecolor()
    console.log(cls)
    document.body.classList.add("bg-"+cls)
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode is Enbled !", " successfully ")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is Enbled !", " successfully ")
    }
  }

const [alert, setAlert] = useState(null)

 const showAlert =(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(()=>{
    setAlert(null)
  },2000)
 }
  return (
    <Router>
    <Navbar  mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/" exact  element={ <TextArea showAlert={showAlert} heading="Enter some Text inside the Test Area"  mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
