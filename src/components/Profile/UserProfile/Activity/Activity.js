import React from 'react';

import Auxiliry from '../../../../hoc/Auxiliry';
import classes from './Activity.css';

const activity = () => {
   return (
      <Auxiliry>
         <div className={classes.container}>
            <div className={classes.nav}>
               <div className={classes.navItems}>
                  <div className={classes.item}>
                     <h2>Sent</h2>
                  </div>
                  <div className={classes.item}>
                     <h2>Feedback</h2>
                  </div>
                  <div className={classes.item}>
                     <h2>Waiting</h2>
                  </div>
               </div>
            </div>

            <div className={classes.section}>
               <div className={classes.top}>
                  <h4>Notification type</h4>
                  <h4>Date</h4>
                  <h4>Status</h4>
                  <h4>Descrption</h4>
               </div>

               <div className={classes.actions}>
                  <div className={classes.desc}>
                     <div className={classes.box}>
                        <h3>Accident</h3>
                     </div>
                     <div className={classes.box}>
                        <span>27/07/2019, 14:32</span>
                     </div>
                     <div className={classes.box1}>
                        <button>Done</button>
                     </div>
                     <div className={classes.box2}>
                        <p>Successful while trying to apply for job Successful while trying for job</p>
                     </div>
                  </div>

                  <div className={classes.desc}>
                     <div className={classes.box}>
                        <h3>Violence</h3>
                     </div>
                     <div className={classes.box}>
                        <span>27/07/2019, 14:32</span>
                     </div>
                     <div className={classes.box1}>
                        <button>Done</button>
                     </div>
                     <div className={classes.box2}>
                        <p>Successful while trying to apply for job Successful while trying for job</p>
                     </div>
                  </div>

                  <div className={classes.desc}>
                     <div className={classes.box}>
                        <h3>Robbery</h3>
                     </div>
                     <div className={classes.box}>
                        <span>27/07/2019, 14:32</span>
                     </div>
                     <div className={classes.box1}>
                        <button>Done</button>
                     </div>
                     <div className={classes.box2}>
                        <p>Successful while trying to apply for job Successful while trying for job</p>
                     </div>
                  </div>

                  <div className={classes.desc}>
                     <div className={classes.box}>
                        <h3>Ambulance</h3>
                     </div>
                     <div className={classes.box}>
                        <span>27/07/2019, 14:32</span>
                     </div>
                     <div className={classes.box1}>
                        <button>Done</button>
                     </div>
                     <div className={classes.box2}>
                        <p>Successful while trying to apply for job Successful while trying for job</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Auxiliry>
   )
}

export default activity;