import React from 'react';

import jobPortal from '../../../assets/images/jobPortal.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}} >
        <img src={jobPortal} alt="JobPortal" />
    </div>
);

export default logo;