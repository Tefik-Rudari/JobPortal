import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Auxiliry from '../../../hoc/Auxiliry';
import FindJob from './FindJob/FindJob';
import FindCandidate from './FindCandidate/FindCandidate';
import classes from './Search.css';

class search extends Component {
    state = {
        selected: true,
        klas1: classes.activee,
        klas2: classes.Searche,
        link: classes.linkk
    }

    buttonClickedHandler = () => {
        this.setState({ klas1: classes.Searche, klas2: classes.activee, active: true })
    }

    buttonUnclickHandler = () => {
        this.setState({ klas1: classes.activee, klas2: classes.Searche, active: true })
    }

    render() {
        return (
            <Auxiliry>
                <div className={[classes.link, 'col-lg-12 col-md-12 col-sm-12'].join(' ')}>
                    <Link to={'/'}
                        className={[`${this.state.active === true ? this.state.klas2 : this.state.klas1}`, 'col-lg-2 col-md-3 col-sm-3'].join(' ')}
                        onClick={this.buttonClickedHandler}>Find a Job</Link>
                    <Link to={'/FindCandidate'}
                        className={[`${this.state.active === true ? this.state.klas1 : this.state.klas2}`, 'col-lg-2 col-md-3 col-sm-3'].join(' ')}
                        onClick={this.buttonUnclickHandler}>Find a Candidate</Link>
                </div>
                <Switch>
                    <Route path={'/'} exact component={FindJob} />
                    <Route path={'/FindCandidate'} component={FindCandidate} />
                </Switch>
            </Auxiliry >
        );
    }
}

export default search;