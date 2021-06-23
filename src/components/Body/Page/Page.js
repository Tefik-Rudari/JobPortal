import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Page.css';
import Company from '../../../assets/images/company.png';
import Globe from '../../../assets/images/globe.png';
import Resume from '../../../assets/images/resume.png';


const page = (props) => {
    return (
        <Auxiliry>
            <p className={[classes.col, classes.paragraf].join(' ')}>Find Job, Employment, and Career Opportunities</p>
            <h1 className={[classes.col, classes.header].join(' ')}>The Eassiest Way to Get Your New Job</h1>
            <div className={classes.statistikat}>
                <div className={classes.colon}>
                    <div className={classes.photo}>
                        <img src={Globe} alt="Globe" />
                    </div>
                    <div className={classes.blloku}>
                        <strong className={classes.number}>48</strong>
                        <p className={classes.paragraf}>Countries</p>
                    </div>
                </div>
                <div className={classes.colon}>
                    <div className={classes.photo}>
                        <img src={Company} alt="Company" />
                    </div>
                    <div className={classes.blloku}>
                        <strong className={classes.number}>450</strong>
                        <p className={classes.paragraf}>Companies</p>
                    </div>
                </div>
                <div className={classes.colon}>
                    <div className={classes.photo}>
                        <img src={Resume} alt="Resume" />
                    </div>
                    <div className={classes.blloku}>
                        <strong className={classes.number}>80,000</strong>
                        <p className={classes.paragraf}>Active Employees</p>
                    </div>
                </div>
            </div>

        </Auxiliry>
    )
};

export default page;