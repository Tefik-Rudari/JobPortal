import React from 'react';

import classes from './NewCandidate.css';
// import IconButton from '@material-ui/core/IconButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLayerGroup, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const newCandidate = (props) => {
    return (
        <div className={[classes.candidate, `col-md-11`].join(' ')}>
            <div className={[classes.team, `d-md-flex p-4 bg-white`].join(' ')}>
                <div className={[classes.photo].join(' ')}>
                    <img src={props.photo} alt={props.altPhoto} />
                </div>
                <div className={[classes.text, `pl-md-4`].join(' ')}>
                    <span className={[`location mb-0`]}>{props.address}</span>
                    <h2>{props.name}</h2>
                    <span className={`position`}>{props.school}</span>
                    <p className={`mb-2`}>{props.biography}</p>
                    <span className={classes.seen}>Last Activity 4 months ago</span>
                    <p><a href="/" className={`btn btn-primary`}>Shortlist</a></p>
                </div>
            </div>
        </div>
    );
};

export default newCandidate;