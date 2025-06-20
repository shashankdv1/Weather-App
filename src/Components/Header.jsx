import React, { useState } from 'react';
import { TiWeatherSunny } from "react-icons/ti";

function Heading() {
  const[open,setOpen] = useState(false);
  function handleSideBarOpen()
  {
    setOpen(!open);
  }
  const closeSidebar = () => {
    setOpen(false);
  };
  return (
  <div className='heading'>
   <h1 id="home"> <TiWeatherSunny style={{color: 'blue', fontSize: '20px'}}/> Weather</h1>
   <button name='sideBar' onClick={handleSideBarOpen} style={{width:'40px'}}>&#9776;</button>
   <div className={`sidebar ${open ? 'open' : ''}`}>
    <button id='close' onClick={closeSidebar}>close</button>
    <div className='sidebar-content'>
    <a href="home">Home</a>
    <a href='in'>Get Weather</a>
    <a href="https://github.com/shashankdv1">About</a>
    </div>
    </div>
     </div>

  );
}

export default Heading;
