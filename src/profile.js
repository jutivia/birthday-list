import React from 'react';


const Profile=({img, name, Age, birthday, nickname, id})=>{
   
return(
<>
<section id='full-container'>
    
    <div className='profile-box'>
    <div className='images'>
    <img src={img} alt=""></img>
    </div>
    <div id='texts'>
    <h3>{name}</h3>
    <p className='text'>{nickname}</p>
    <p className='text'>{birthday}</p>
    <p className='text'>{Age}</p>
    </div>
    </div>
    

</section>
</>
    )
}




export default Profile