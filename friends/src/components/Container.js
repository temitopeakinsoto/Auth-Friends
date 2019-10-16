import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';
import Friends from './friends';
import Login from './login';
import NewFriend from './addfriend';

function Container(props){

  const handleLogout = () => {
    localStorage.clear();
    props.history.replace('/');

  }

    return(
        <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/'>Login</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
          <NavLink to='/addfriend'>Add Friend</NavLink>
        </span>

        <button onClick={handleLogout}>Logout</button>
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
        <Route
          exact
          path='/addfriend'
          render={props => withAuth(NewFriend, props)}
        />
      </main>
    </div>
    )
}

function withAuth(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
 }

export default Container;