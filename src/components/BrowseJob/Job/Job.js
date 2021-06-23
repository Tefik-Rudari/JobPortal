import React from 'react';

import classes from './Job.css';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const job = (props) => {
        return (
                <div className={classes.container}>
                    <div className={classes.boxes}>
                        <div className={classes.box}>
                            <div className={classes.job}>
                                <div className={classes.jobTitle}>
                                    <span>{props.jobTitle}</span>
                                    <h1>{props.title}</h1>
                                </div>
                                <div className={classes.jobDesc}>
                                    <span>
                                        <IconButton>
                                            <FontAwesomeIcon icon={faLayerGroup} size="1x" />
                                        </IconButton>{props.fbName}
                                    </span>
                                    <span>
                                        <IconButton>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
                                        </IconButton>{props.city}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.btn}>
                                <div className={classes.heart}>
                                    <span>
                                        <IconButton>
                                            <FontAwesomeIcon icon={faHeart} size="1x" />
                                        </IconButton>
                                    </span>
                                </div>
                                <button>Apply Job</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default job;