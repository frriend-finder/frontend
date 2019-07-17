import React from 'react';
import './styles/App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
// import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Login from './components/LoginForm';
import UserLanding from './components/UserLanding';
import NewUserForm from './components/NewUserForm';
import MembersList from './components/MemberList';
import UserHomePage from './components/UserHomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-wrapper">
        {/* Routes */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={NewUserForm} />
        <Route exact path='/' component={UserLanding} /> {/* Maybe change the url to user's username later */}
        {/* <PrivateRoute exact path='' component={} /> */}

        <Route path='/memberslist' component={MembersList} />
        <Route path= '/userhomepage' component={UserHomePage}/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
