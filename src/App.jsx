import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [city,setCity]=useState('');
  const [temp,setTemp]=useState(null);
  const API_KEY='85996f3a5eac7731d06a3cb234ed5509';
  const getWeather=()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'85996f3a5eac7731d06a3cb234ed5509'}&units=metric`)
    .then(res=>{
      setTemp(res.data.main.temp);
    })
    .catch(err=>{
      alert('city not found');
      setTemp(null);
    });
  };
  return(
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>simple weather app</h1>
      <input
      type="text"
      placeholder="enter city"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
      <button onClick={getWeather}>check</button>
      {temp!==null &&(
        <h2>temprature in {city}:{temp}c</h2>
      )}
    </div>
  );
  
}

export default App
