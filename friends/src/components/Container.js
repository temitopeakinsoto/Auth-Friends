import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Friends from './friends';
import Login from './login';

function Container(){

    return(
        <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/'>Login</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
        </span>

        <button>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/'
          component={Login}
        />
        <Route
          exact
          path='/friends'
          component={Friends}
        />
      </main>
    </div>
    )
}

export default Container;