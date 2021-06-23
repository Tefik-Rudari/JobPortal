import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Newsletter.css';

const newsletter = (props) => {
    return (
        <Auxiliry>
            <div className={classes.newsletter}>
                <div className={classes.content}>
                    <h1>Subscribe to our Newsletter</h1>
                    <div className={classes.boxContent}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        <div className={classes.form}>
                            <input type="email" placeholder="Enter email address"></input>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </Auxiliry>
    )
};

export default newsletter;