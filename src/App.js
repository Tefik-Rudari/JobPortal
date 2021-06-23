import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Body from './components/Body/Body';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import Register from './components/Register/Register';
// import 'bootstrap/dist/css/bootstrap.min.css';
import BrowseJob from './components/BrowseJob/BrowseJob';
import Candidates from './components/Candidates/Candidates';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/profile" exact component={Profile} />
            <Route path="/edit" exact component={EditProfile} />
            <Route path="/register" exact component={Register} />
            <Route path="/browseJob" component={BrowseJob} />
            <Route path="/Candidates" component={Candidates} />
            <Route path="/Contact" component={Contact} />
            <Route path="/" component={Body} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;