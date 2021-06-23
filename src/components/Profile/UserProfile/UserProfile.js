import React, {Component} from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './UserProfile.css';
import person from '../../../assets/images/Candidates/person5.jpg';
import Activity from './Activity/Activity';
import Toogler from './Activity/Toogler/Toogler';

class userProfile extends Component {
   render() {

      return (
         <Auxiliry>
            <div className={classes.container}>
               <div className={classes.userProfileText}>
                  <h1>User profile</h1>
                  <hr />
               </div>
               <div className={classes.profile}>
                  <div className={classes.main}>
                     <div className={classes.leftSide}>
                        <img src={person} alt="person" />
                        <h3>Rachel Clinton</h3>
                        <span>example@example.com</span>
                     </div>
                  </div>

                  <div className={classes.sections}>
                     <div className={classes.boxes}>
                        <h4>User Profile</h4>
                        <div className={classes.box}>
                           <div className={classes.desc}>
                              <p>Gender: </p>
                              <span>Female</span>
                           </div>
                           <div className={classes.desc}>
                              <p>Date: </p>
                              <span>23/05/1989</span>
                           </div>
                           <div className={classes.desc}>
                              <p>Phone number: </p>
                              <span>+125489548</span>
                           </div>
                        </div>
                     </div>

                     <div className={classes.boxes}>
                        <h4>Notification type</h4>
                        <div className={classes.box}>
                           <div className={classes.desc}>
                              <p>Emergency: </p>
                              <span>8/11</span>
                           </div>
                           <div className={classes.desc}>
                              <p>Helps: </p>
                              <span>4/5</span>
                           </div>
                           <div className={classes.desc}>
                              <p>Number report: </p>
                              <span>5/9</span>
                           </div>
                        </div>
                     </div>

                     <div className={classes.boxes}>
                        <h4>Settings</h4>
                        <div className={classes.box}>
                           <div className={classes.desc}>
                              <p>Language: </p>
                              <span>English</span>
                           </div>
                           <div className={classes.desc}>
                              <p>Get notifications: </p>
                              <span><Toogler /></span>
                           </div>
                           <div className={classes.desc}>
                              <p>Send to family: </p>
                              <span>Off</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <Activity />
            </div>
         </Auxiliry>
      )
   }
}

export default userProfile;