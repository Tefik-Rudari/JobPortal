import React from 'react';

import classes from './Footer.css';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const footer = (props) => {
    return (
        <footer className={classes.footer}>

            <div className={classes.footerContent}>
                <div className={classes.box}>
                    <h2>Skillhunt Jobboard</h2>
                    <div className={classes.boxContent}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <IconButton>
                            <FontAwesomeIcon className={classes.icons} icon={faFacebook} size="sm"></FontAwesomeIcon>
                        </IconButton>
                        <IconButton>
                            <FontAwesomeIcon className={classes.icons} icon={faInstagram} size="sm"></FontAwesomeIcon>
                        </IconButton>
                        <IconButton>
                            <FontAwesomeIcon className={classes.icons} icon={faTwitter} size="sm"></FontAwesomeIcon>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.box}>
                    <h2>Employers</h2>
                    <div className={classes.boxContent}>
                        <ul>
                            <li>Browse Candidates</li>
                            <li>Post a Job</li>
                            <li>Employer Listing</li>
                            <li>Resume Page</li>
                            <li>Dashboard</li>
                            <li>Job Packages</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.box}>
                    <h2>Candidate</h2>
                    <div className={classes.boxContent}>
                        <ul>
                            <li>Browse Jobs</li>
                            <li>Submit Resume</li>
                            <li>Dashboard</li>
                            <li>Browse Categories</li>
                            <li>My Bookmarks</li>
                            <li>Candidate Listing</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.box}>
                    <h2>Account</h2>
                    <div className={classes.boxContent}>
                        <ul>
                            <li>My Account</li>
                            <li>Sign In</li>
                            <li>Create Account</li>
                            <li>Checkout</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.box}>
                    <h2>Have a Questions?</h2>
                    <div className={classes.boxContent}>
                        <ul>
                            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li>+2 392 3929 210</li>
                            <li>info@yourdomain.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.footerCopyright}>
                <div>
                    All rights reserved © 2020. Powered by <a href="https://duende.app" rel="nofollow">Duende</a>
                </div>
            </div>
        </footer>
    )
}

export default footer;