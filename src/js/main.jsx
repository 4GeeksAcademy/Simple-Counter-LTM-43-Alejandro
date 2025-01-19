import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';


const intervalID = setInterval(myCallback, 1000);
 let contador = 0
function myCallback(a, b) {
  // Tu código debe ir aquí
  ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <React.StrictMode>
        <div className='counter-holder'> 
          <SecondsCounter seconds= {<div className= "fa fa-clock"></div>}/>
          <SecondsCounter seconds ={Math.floor(contador/100000)%10}/>
          <SecondsCounter seconds ={Math.floor(contador/10000)%10}/>
          <SecondsCounter seconds ={Math.floor(contador/1000)%10}/>
          <SecondsCounter seconds ={Math.floor(contador/100)%10}/>
          <SecondsCounter seconds ={Math.floor(contador/10)%10}/>
          <SecondsCounter seconds ={Math.floor(contador/1)%10}/>
        </div>  
    </React.StrictMode>
  </div>,
  )
  contador++
}
