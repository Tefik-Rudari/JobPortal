import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import classes from './Category.css';
import Auxiliry from '../../../../hoc/Auxiliry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faChartBar, faGraduationCap, faCalculator, faClinicMedical } from '@fortawesome/free-solid-svg-icons';

class Category extends Component {
    render() {
        return (
            <Auxiliry>
                <div className={[classes.Blockk, " col-lg-12 col-md-12 col-sm-12"].join(" ")}>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-12"].join(" ")}>
                        <h3><Link to='/'>Website & Software</Link></h3>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faChartBar} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                    </div>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-12"].join(" ")}>
                        <h3><Link to='/' >Education & Training</Link></h3>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faGraduationCap} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                    </div>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-12"].join(" ")}>
                        <div>
                        <h3><Link to='/'>Graphic & UI/UX Design</Link></h3>
                        </div>
                        <div>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faChartBar} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                        </div>
                    </div>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-2"].join(" ")}>
                        <h3><Link to='/'>Accounting & Finance</Link></h3>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faCalculator} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                    </div>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-2"].join(" ")}>
                        <h3><Link to='/'>Restaurant & Food</Link></h3>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faChartBar} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                    </div>
                    <div className={[classes.Categoryy, "col-lg-2 col-md-2 col-sm-2"].join(" ")}>
                        <h3><Link to='/'>Health & Hospital</Link></h3>
                        <span className={classes.FontAwesomee}>
                            <FontAwesomeIcon className={classes.iconss} icon={faClinicMedical} size="3x"></FontAwesomeIcon>
                        </span>
                        <span className={classes.textt}>143 Open position</span>
                    </div>
                </div>
                <Switch>
                    <Route path='/Education' />
                    <Route path='/Graphic' />
                    <Route path='/Account' />
                    <Route path='/Restaurant' />
                    <Route path='/Hospital' />
                    <Route path='/' />
                </Switch>
            </Auxiliry>
        )
    }
}

export default Category;