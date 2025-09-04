import React from 'react';

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); 
}

const Forms=()=>{
    return(
        <>
        <h1 style={{textAlign:"center"}}>This is Form Component</h1>
         <form action='' onSubmit={handleSubmit} style={{textAlign:"center"}}>
           <input type="text" name='name' placeholder='Enter your name'/> <br /><br />  
           <input type="email" name='email' placeholder='Enter your email'/> <br /><br />
           <input type="password" name='password' placeholder='Enter your password'/> <br /><br />
           <input type="number" name='mobile' placeholder='Enter your mobile number'/> <br /><br />
           <input type="submit" value="Submit"/>                
         </form>
        </>
    )

}

export default Forms;
