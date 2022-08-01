import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Movies from './components/movies'
import NavBar from './components/navbar';
import NotFound from './components/notfound';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieform';
import LoginForm from './components/loginform';
import RegisterForm from './components/registerform';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/login' element={< LoginForm />}/>
          <Route path='/register' element={< RegisterForm />}/>
          <Route path='/movies' element={< Movies />}/>
          <Route path='/customers' element={< Customers />}/>
          <Route path='/rental' element={< Rentals />}/>
          <Route path='/movies/:_id' element={< MovieForm />}/>
          <Route path='*' element={< NotFound />}/>
          <Route path='/' element={<Navigate replace to='/movies'/>}/>
        </Routes>
      </div>
      
      </React.Fragment>
  );
}

export default App;
