import React, { useState } from 'react';

export function LoginView(props) {
     const [ username, setUsername ] = useState('');
     const [ password, setPassword ] = useState('');

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(username, password);
         props.onLoggedIn(username);
     };

     return (
         <form className='form1'>
             <h3>Sign In</h3>
             <div className='form-group'>
             <label>
                 Username:
                 <input type='text' value={username} className='form-control' placeholder='Enter Username' onChange={e => setUsername(e.target.value)}/>
             </label>
             </div>
             <div>
             <label>
                 Password:
                 <input type='password' className='form-control' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
             </label>
             </div>
             <button type="button" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
             <p className='forgot-password text-left'>Forgot Password?</p>
         </form>
     );
}





    