import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Blog.css';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../../assets/images/Blog/image1.jpg';
import image2 from '../../../assets/images/Blog/image2.jpg';
import image3 from '../../../assets/images/Blog/image3.jpg';
import image4 from '../../../assets/images/Blog/image4.jpg';

const Blog = (props) => {
    return (
        <Auxiliry>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>Our Blog</span>
                    <h1>Recent Blog</h1>
                </div>
                <div className={classes.boxes}>
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={image1} alt="image1" />
                            <span>
                                AUGUST 28, 2019 ADMIN
                                <IconButton>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </IconButton>3
                            </span>
                        </div>
                        <i className="fa fa-trash" />
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={image2} alt="image2" />
                            <span>
                                AUGUST 28, 2019 ADMIN
                                <IconButton>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </IconButton>3
                            </span>
                        </div>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={image3} alt="image3" />
                            <span>
                                AUGUST 28, 2019 ADMIN
                                <IconButton className={classes.icons}>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </IconButton>3
                            </span>
                        </div>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={image4} alt="image4" />
                            <span>
                                AUGUST 28, 2019 ADMIN
                                <IconButton>
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                                </IconButton>3
                            </span>
                        </div>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                </div>
            </div>
        </Auxiliry >
    )
}

export default Blog;