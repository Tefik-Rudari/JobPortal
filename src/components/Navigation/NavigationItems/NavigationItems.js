import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationIntem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem links={props.links} link="/">Home</NavigationItem>
        <NavigationItem links={props.links} link="/browseJob">Browse Jobs</NavigationItem>
        <NavigationItem links={props.links} link="/Candidates">Candidates</NavigationItem>
        <NavigationItem links={props.links} link="/Contact">Contact</NavigationItem>
        <NavigationItem links={props.links} link="/profile">Profile</NavigationItem>
        <NavigationItem links={props.links} link="/register">Register</NavigationItem>
        {/* <NavigationItem link="/PostJob"><div className={classes.PostJob}>Post a Job</div></NavigationItem>
        <NavigationItem link="/WantJob"><div className={classes.WantJob}>Want a Job</div></NavigationItem> */}
    </ul>
)

export default navigationItems;