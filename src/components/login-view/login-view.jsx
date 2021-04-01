import React, { useState } from 'react';
import axios from 'axios';
/** imported react bootstrap components*/
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

export function LoginView(props) {
     const [ username, setUsername ] = useState('');
     const [ password, setPassword ] = useState('');
     const [ login, setLogin ] = useState('');

    /**  what to do once submit is clicked*/
     const handleSubmit = (e) => {
         e.preventDefault();
         axios.post('https://findamovieflix.herokuapp.com/login', {
             Username: username,
             Password: password
         })
         .then(response => {
             const data = response.data;
             props.onLoggedIn(data);
         })
         .catch(e => {
             console.log('No Such User')
         });
     };

     const loginUser = () => {
         setLogin(!login);
     }

    /**  renders a login form for entering username and password */
     return (
         <Form className='form1'>
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
             <p>Not a Member?</p>
             <p>
             <Link to={`/register`}>
                  <Button 
                    variant="link"
                  >
                   Sign Up 
                  </Button>
                </Link>
                </p>
         </Form>
     );
}





    