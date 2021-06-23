import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import { Dropdown } from 'react-bootstrap';
// import Auxiliry from '../../hoc/Auxiliry';
import classes from './Profile.css';
import UserProfile from './UserProfile/UserProfile';
import person from '../../assets/images/Candidates/person5.jpg';
// import Spinner from '../UI/Spinner/Spinner';

class profile extends Component {

  state = {
    loading: false,
    // spinner: <Spinner />,
    profile: null
  }

  // componentDidMount = () => {
  //   axios.post('http://vegimselimaj.me/api/user/register')
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  //   this.setState({ loading: false })
  // }

  render() {
    return (
      <div>
        {
          this.state.loading ? (
            <div>
              {this.state.spinner}
            </div>
          ) :
            (
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
                            <Dropdown.Item>
                              <Link
                                to={'/edit'}
                                className={classes.linku}>Edit profile</Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className={classes.user}>
                      <UserProfile />
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default profile;
//   async componentDidMount() {
//     const url = 'http://portaljob.freesite.vip/api/user/register';
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ profile: data[0], loading: false })
//   }

//   render() {
//     return (
//       <Auxiliry>
//         <div className={classes.container}>
//           <div className={classes.box}>
//             <div className={classes.profileContent}>
//               <div className={classes.header}>
//                 <div className={classes.name}>
//                   <h4>Rachel Clinton</h4>
//                   <span>User</span>
//                 </div>
//                 <div className={classes.image}>
//                   <Dropdown>
//                     <Dropdown.Toggle className={classes.btt} id="dropdown-basic">
//                       <img src={person} alt="person" />
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item link="#/logout">Logout</Dropdown.Item>
//                       <Dropdown.Item>
//                         <Link
//                           to={'/edit'}
//                           className={classes.linku}>Edit profile</Link>
//                       </Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//               </div>
//               <div className={classes.user}>
//                 <UserProfile />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Auxiliry>
//     )
//   }
// }

// export default profile;