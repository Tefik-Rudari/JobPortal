import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Testimonial.css';
import person1 from '../../../assets/images/Candidates/person1.jpg';
// import person2 from '../../../assets/images/Candidates/person2.jpg';
// import person3 from '../../../assets/images/Candidates/person3.jpg';
import person4 from '../../../assets/images/Candidates/person4.jpg';
import person5 from '../../../assets/images/Candidates/person5.jpg';
// import person6 from '../../../assets/images/Candidates/person6.jpg';

const testimonial = (props) => {
    return (
        <Auxiliry>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>TESTIMONIAL</span>
                    <h1>Happy Clients</h1>
                </div>
                <div className={classes.boxes}>
                    <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person1} alt="person1" />
                            </div>
                            <div>
                                <h2>Danica Lewis</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person2} alt="person2" />
                            </div>
                            <div className={classes.desc}>
                                <h2>Nicole Simon</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person3} alt="person3" />
                            </div>
                            <div>
                                <h2>Dave Buff</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div> */}
                    <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person4} alt="person4" />
                            </div>
                            <div>
                                <h2>Roger Scott</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person5} alt="person5" />
                            </div>
                            <div>
                                <h2>Cloe Mayer</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.box}>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className={classes.profile}>
                            <div>
                                <img src={person6} alt="person6" />
                            </div>
                            <div>
                                <h2>Rachel Clinton</h2>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Auxiliry>
    )
};

export default testimonial;