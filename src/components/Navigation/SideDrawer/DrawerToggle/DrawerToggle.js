import React, { Component } from 'react';

import classes from './DrawerToggle.css';

class DrawerToggle extends Component {
    state = {
        class: classes.DrawerToggleDiv,
        drawerToggleCss: classes.DrawerToggle
    }

    listenScrollEvent = (event) => {
        if (window.scrollY > 100) {
            this.setState({ class: classes.DrawerToggleDiv1, drawerToggleCss: classes.DrawerToggle1});
        }
        else {
            this.setState({ class: classes.DrawerToggleDiv, drawerToggleCss: classes.DrawerToggle});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className={this.state.drawerToggleCss} onClick={this.props.clicked}>
                <div className={this.state.class}></div>
                <div className={this.state.class}></div>
                <div className={this.state.class}></div>
            </div>
        )
    };
};

export default DrawerToggle;