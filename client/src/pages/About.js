import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../sass/About.sass';

export const About = () => {
  const {user, dispatch} = useContext(AuthContext);
  const style = user?{
    backgroundImage: `url(${user.coverPicture})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom center"
  }:{}

  function handleLogout(){
    dispatch({
      type: "LOGOUT_START"
    });
  }

  return (
    <div className="about">
      <div className="container">
        {user ? (
          <>
            <div className="bgText">simple login</div>
            <div className="header" style={style}>
              <img className="header-img" src={user.profilePicture} alt="user profile" />
              <div className="name">{user.username}</div>
            </div>
            <div className='nav'>
              <Link to="/">Home</Link>
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <Navigate replace to="/" />
        )}
      </div>
    </div>
  )
}
