import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';
import person from '../../../assets/images/Candidates/person5.jpg';
import Auxiliry from '../../../hoc/Auxiliry';
import classes from './EditProfile.css';

class editProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         gender: '',
         email: '',
         password: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
   }

   componentWillMount() {
      this.getProfileDetails();
   }

   getProfileDetails() {
      let profileId = this.props.match.params.id;
      axios.get(`http://portaljob.freesite.vip/api/user/register${profileId}`)
         .then(response => {
            this.setState({
               id: response.data.id,
               gender: response.data.gender,
               email: response.data.email,
               password: response.data.password
            }, () => {
               console.log(this.state);
            });
         })
         .catch(err => console.log(err));
   }

   editUserProfile(newProfile) {
      axios.request({
         method: 'put',
         url: `http://portaljob.freesite.vip/api/user/register${this.state.id}`,
         data: newProfile
      }).then(response => {
         this.props.history.push('/');
      }).catch(err => console.log(err));
   }

   onSubmit(e) {
      const newProfile = {
         email: this.refs.email.value,
         gender: this.refs.gender.value
      }
      this.editUserProfile(newProfile);
      e.preventDefault();
   }

   handleInputChange(e) {
      const target = e.target;
      const gender = target.gender;
      const email = target.email;
      const password = target.password;

      this.setState({
         gender: gender,
         email: email,
         password: password
      });
   }

   render() {
      return (
         <Auxiliry>
            <div className={classes.container}>
               <div className={classes.box}>
                  <div className={classes.profileContent}>
                     <div className={classes.header}>
                        <div className={classes.name}>
                           <h4>Rachel Clinton</h4>
                           <span>User</span>
                        </div>
                        <div className={classes.image}>
                           <Dropdown>
                              <Dropdown.Toggle className={classes.btt} id="dropdown-basic">
                                 <img src={person} alt="person" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item link="#/logout">Logout</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                     </div>
                     <div className={classes.user}>
                        <div>
                           <br />
                           <Link className="btn btn-primary" to="/profile">Back</Link>
                           <h1 className={classes.newww}>Edit Profile</h1>
                           <form onSubmit={this.onSubmit.bind(this)}>
                              <div className="form-group">
                                 <label htmlFor="gender">Gender</label>
                                 <select className="form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Non-binary</option>
                                 </select>
                              </div>
                              
                              <div className="form-group">
                                 <label>Email</label>
                                 <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                              </div>

                              <div className="form-group">
                                 <label>Password</label>
                                 <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                              </div>
                              <input type="submit" value="Save" className="btn btn-primary btn-block" />
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Auxiliry>
      )
   }
}

export default editProfile;