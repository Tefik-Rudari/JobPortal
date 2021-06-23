import React, { Component } from "react"
import { Link, Switch, Route } from 'react-router-dom';

import Job from './Job/Job';
import Auxiliry from '../../hoc/Auxiliry'
import classes from './BrowseJob.css';
import Button from '../UI/Button/Button';
import index from '../Body/Body';
import Newsletter from '../Body/Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/index';

class BrowseJob extends Component {
    render() {
        const { search, value } = this.props;

        return (
            <Auxiliry>
                <div className={classes.body}>
                    <div className={`text-center text-white`}>
                        <div className={[classes.links, `d-inline`].join(' ')}>
                            <pre>
                                <Link className={classes.link} to={'/'}>HOME    ></Link>
                                <Link className={classes.link}>    BROWSE JOB</Link>
                            </pre>
                        </div>
                        <h1>Browse Jobs</h1>
                    </div>
                </div>
                <Switch>
                    <Route path={this.props.location.pathname + '/index'} exact component={index} />;
                </Switch>
                <div className={classes.jobs} >
                    <div className={classes.publication}>
                        <Job jobTitle='Part time' title='Frontend Development' fbName='Job Portal' city='Prishtina' />
                        <Job jobTitle='Part time' title='Frontend Development' fbName='Job Portal' city='Prishtina' />
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


                                        <input
                                            className="form-control"
                                            placeholder="Search"
                                            onChange={(e) => search(e.target.value)}
                                            value={value} />
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

                                        {/* <span className={`faSearch`}>
                                        <FontAwesomeIcon icon={faSearch} size="1x" />

                                    </span>
                                    <input type="text" className={`form-control`} placeholder="Search..." /> */}


                                        <input
                                            className="form-control"
                                            placeholder="Search"
                                            onChange={(e) => search(e.target.value)}
                                            value={value} />
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

// function mapStateToProps({ works }) {
//     return { value: works.value };
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions.search, dispatch);
}


export default connect(null, mapDispatchToProps)(BrowseJob);
