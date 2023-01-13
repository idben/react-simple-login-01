import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../sass/Home.sass';

export const Home = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="home">
      <div className="container">
        <div className="bgText">simple login</div>
        <div className='nav'>
          <Link to="/about">about</Link>
        </div>
        <div className='info'>
          Welcome back, <span className="name">{user.username}</span>
          <br />
          <span>see </span>
          <Link to="/about">about</Link>
          <span> page</span>
        </div>
      </div>
    </div>
  )
}
