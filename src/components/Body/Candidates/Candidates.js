import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Candidates.css';
import person1 from '../../../assets/images/Candidates/person1.jpg';
// import person2 from '../../../assets/images/Candidates/person2.jpg';
import person3 from '../../../assets/images/Candidates/person3.jpg';
// import person4 from '../../../assets/images/Candidates/person4.jpg';
import person5 from '../../../assets/images/Candidates/person5.jpg';
// import person6 from '../../../assets/images/Candidates/person6.jpg';

const candidates = (props) => {
    return (
        <Auxiliry>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>CANDIDATES</span>
                    <h1>Latest Candidates</h1>
                </div>
                <div className={classes.boxes}>
                    {/* BOX 1 */}
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person1} alt="person1" />
                        </div>
                        <div className={classes.description}>
                            <h2>Danica Lewis</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div>
                    {/* BOX 2 */}
                    {/* <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person2} alt="person2" />
                        </div>
                        <div className={classes.description}>
                            <h2>Nicole Simon</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div> */}
                    {/* BOX 3 */}
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person3} alt="person3" />
                        </div>
                        <div className={classes.description}>
                            <h2>Cloe Mayer</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div>
                    {/* BOX 4 */}
                    {/* <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person4} alt="person4" />
                        </div>
                        <div className={classes.description}>
                            <h2>Dave Buff</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div> */}
                    {/* BOX 5 */}
                    <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person5} alt="person5" />
                        </div>
                        <div className={classes.description}>
                            <h2>Rachel Clinton</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div>
                    {/* BOX 6 */}
                    {/* <div className={classes.box}>
                        <div className={classes.images}>
                            <img src={person6} alt="person6" />
                        </div>
                        <div className={classes.description}>
                            <h2>Nicole Simon</h2>
                            <span>WESTERN CITY, UK</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </Auxiliry>
    )
};

export default candidates;