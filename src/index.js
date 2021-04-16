import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './default.css';


function ProfileList(){
  const[profiles, setProfiles]= useState({fullName:'',nickName:'', birthday:'',image:''});
  const[people, setPeople]=useState([])
const removeData=(id)=>{
   const newPeople= people.filter((person)=>person.id!== id)
    setPeople(newPeople)
}

const handleChange=(e)=>{
 const name= e.target.name
 const value= e.target.value
 setProfiles({...profiles, [name]:value})
}
const handleSubmit =(e)=>{
      e.preventDefault()
      if(profiles.fullName && profiles.nickName && profiles.birthday){
    const freshPeople={...profiles, id:new Date().getTime().toString()}
    setPeople([...people,freshPeople])
    setProfiles({fullName:'', nickName:'', birthday:'', image:''})
        
    }}

     useEffect(() => {
       const datas= localStorage.getItem('users')
       if(datas){
     setPeople(JSON.parse(datas))
       }
    }, [])

    useEffect(() => {
     localStorage.setItem('users', JSON.stringify(people))
    })
    

  return (
    <>
    <div id='main-container'>
    <h1 style={{color:'rgb(108, 183, 202)'}}>Birthday Reminder</h1>
    
    {people.map((unit)=>{
      const {image, fullName, birthday, nickName, id}= unit
      return (
      <section id='profile-array' key={id}>
   <section id='full-container'>
    
    <div className='profile-box' >
    {/* <div className='images'>
    <img src={image} alt=""></img>
    </div> */}
    <div>
    <h3 id='name'>{fullName}</h3>
    </div>
    <div id='texts'>
    <p className='text'>{nickName}</p>
    <p className='text'>{birthday}</p>
  
    </div>
    </div>
    

</section>
    <button type='button' className='btn1' onClick={()=>removeData(unit.id)}>delete</button>
    </section>
      )
})}
    <br/><br/>
    <button className='btn' onClick={()=>setPeople([])}>delete all</button>
    </div>

    <section id='input-form'>
      <form onSubmit={handleSubmit}>
         {/* <div className='unit-input'>
          <label htmlFor='image'>Add a photo </label>
          <input type='file' 
          id='image' 
          name='image' 
          value={profiles.image}
          onChange={handleChange} 
          required/>
         </div> */}

        <div className='unit-input'>
          <label htmlFor='fullName'>Full Name: </label>
          <input type='text' 
          id='fullName' 
          name='fullName' 
          value={profiles.fullName} 
          onChange={handleChange} 
          required/>
        </div>

         <div className='unit-input'>
          <label htmlFor='birthday'>Birthday: </label>
          <input type='text' 
          id='birthday' 
          name='birthday' 
          value={profiles.birthday} 
          onChange={handleChange} 
          required/>
        </div>

         <div className='unit-input'>
          <label htmlFor='nickName'>Nickname: </label>
          <input type='text' 
          id='nickName' 
          name='nickName' 
          value={profiles.nickName}
          onChange={handleChange} 
          required/>
          </div>

         
        
         <button type='submit' className='btn' >Add Person</button>
      
      </form>
     
    </section>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <ProfileList />
  </React.StrictMode>,
  document.getElementById('root')
);
