import React, { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import '../sass/Register.sass';


export const Register = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch} = useContext(AuthContext);
  
  async function loginCall(userCredential, dispatch){
    dispatch({
      type: "LOGIN_START"
    });
    try{
      const response = await axios.post("http://localhost:8800/login", userCredential);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data
      })
    }catch(error){
      alert("Login failed, try again later...");
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error
      })
    }
  }

  function handleFormSubmit(e){
    e.preventDefault();
    loginCall({
      email: email.current.value,
      password: password.current.value
    }, dispatch)
  }

  return (
    <div className="reg">
      <div className="container">
        <div className="bgText">simple login</div>
        <div className='nav'>
          login first, pleaase.
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form">
            <input ref={email} type="text" name="userMail" placeholder="your email"></input>
            <input ref={password} type="password" name="userMail" placeholder="your password"></input>
            <button disabled={isFetching} className="btn btnSubmit">submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
