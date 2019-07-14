import React from 'react';
import './styles/App.css';


import { BrowserRouter as Router, Route, Navlinks } from 'react-router-dom';

// import components
// import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Login from './components/LoginForm';
import UserLanding from './components/UserLanding';
import NewUserForm from './components/NewUserForm';
import MembersList from './components/MemberList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation />

        {/* Routes */}
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={NewUserForm} />
        <Route exact path='/' component={UserLanding} /> {/* Maybe change the url to user's username later */}
        {/* <PrivateRoute exact path='' component={} /> */}

        <Route path='/memberslist' component={MembersList} />


      </div>
    </Router>
  );
}

export default App;
