import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile';
import './default.css';
import {datas} from './data'

function ProfileList(){
  const[profiles, setProfiles]= useState(datas);
const removeData=(id)=>{
   const newPeople= profiles.filter((person)=>person.id!== id)
    setProfiles(newPeople)
}
  return (
    <>
    <div id='main-container'>
    <h3 style={{color:'rgb(98, 112, 126)'}}>Birthday Reminder</h3>
    
    {profiles.map((unit)=>{
      return (
      <section id='profile-array'>
    <Profile key={unit.id} {...unit}>
    </Profile>
    <button type='button' className='btn1' onClick={()=>removeData(unit.id)}>delete</button>
    </section>
      )
})}
    
    <button id='btn' onClick={()=>setProfiles([])}>delete all</button>
    </div>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ProfileList />
  </React.StrictMode>,
  document.getElementById('root')
);
