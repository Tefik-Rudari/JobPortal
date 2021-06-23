import React, { Component } from "react"
import { Link, Switch, Route } from 'react-router-dom';

import NewCandidate from './Candidate/NewCandidate';
import Auxiliry from '../../hoc/Auxiliry'
import classes from './Candidates.css';
import index from '../Body/Body';
import Newsletter from '../Body/Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import person1 from '../../assets/images/Candidates/person1.jpg';
import person2 from '../../assets/images/Candidates/person2.jpg';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';

class Candidates extends Component {
    render() {
        return (
            <Auxiliry>
                {/* Header */}
                <div className={classes.body}>
                    <div className={`text-center text-white`}>
                        <div className={[classes.links, `d-inline`].join(' ')}>
                            <pre>
                                <Link className={classes.link} to={'/'}>HOME    > </Link>
                                <Link className={[classes.link, ``].join(' ')}>   CANDIDATES</Link>
                            </pre>
                        </div>
                        <h1>Candidates</h1>
                    </div>
                </div>
                <Switch>
                    <Route path={this.props.location.pathname + '/index'} exact component={index} />;
                </Switch>
                {/* ---------------------- */}
                <div className={classes.jobs} >
                    <div className={classes.publication}>
                        <NewCandidate
                            photo={person1}
                            altPhoto='Personi nuk u gjend'
                            address='Western City, UK'
                            name='Danica Lewis'
                            school='Graduate'
                            biography='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
                        <NewCandidate
                            photo={person2}
                            altPhoto="Foto nuk u gjend"
                            address='Western City, UK'
                            name='Danica Lewis'
                            school='Graduate'
                            biography='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
                        <NewCandidate
                            photo={person2}
                            altPhoto="Foto nuk u gjend"
                            address='Western City, UK'
                            name='Danica Lewis'
                            school='Graduate'
                            biography='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' />
                    </div>
                    <div className={classes.sortt}>
                        <div className={classes.sort}>
                            <div className={classes.sortCategory}>
                                <h3>Browse Category</h3>
                                <form action="#" onSubmit={"submit"} class="search-form mb-3">
                                    <div class="form-group">

                                        {/* <span className={`faSearch`}>
                                        <FontAwesomeIcon icon={faSearch} size="1x" />

                                    </span>
                                    <input type="text" className={`form-control`} placeholder="Search..." /> */}
                                    </div>
                                    <label><input className={classes.checkbox} type="checkbox" checked /> Website & Software</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Education & Training</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Graphics Design</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Accounting & Finance</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Restaurant & Food</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Health & Hospital</label><br />
                                    <Button disabled={false} btnType='Danger1' className={classes.Danger1} name="submit" id="submit" type="submit">Submit</Button>
                                </form>
                            </div>
                        </div>
                        <div className={classes.sort}>
                            <div className={classes.sortCategory}>
                                <h3>Browse Category</h3>
                                <form action="#" class="search-form mb-3">
                                    <div class="form-group">

                                    </div>
                                    <label><input className={classes.checkbox} type="checkbox" checked /> Website & Software</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Education & Training</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Graphics Design</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Accounting & Finance</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Restaurant & Food</label><br />
                                    <label><input className={classes.checkbox} type="checkbox" /> Health & Hospital</label><br />
                                    <Button disabled={false} btnType='Danger1' className={classes.Danger1} name="submit" id="submit" type="submit">Submit</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
                <Footer />
            </Auxiliry>
        )
    }
}



export default Candidates;
