import React, { useState } from 'react';

export function RegistrationView(props) {
     const [ username, setUsername ] = useState('');
     const [ email, setEmail ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ confirmPassword, setConfirmPassword ] = useState('');
     const [ birthday, setBirthday] = useState('');


     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(username, password, email, birthday);
         props.onRegister('test');
     };


return (
    <form>
        <h3>Register New User</h3>
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
        <div className='form-group'>
            <label>Email:
                <input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
        </div>
        <div className='form-group'>
            <label>
                Birthday: 
                <input type='date' className='form-control' placeholder='Enter Birthday' value={birthday} onChange={e => setBirthday(e.target.value)}/>
            </label>
        </div>
        <button type="button" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </form>
);
}
