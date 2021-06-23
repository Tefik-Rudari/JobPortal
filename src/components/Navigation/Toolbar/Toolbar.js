import React, { Component } from 'react';
import Logo from '../../Photo/Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

class toolbar extends Component {
    state = {
        class: classes.Toolbar,
        color: classes.white
    }

    listenScrollEvent = (event) => {
        if (window.scrollY > 100) {
            this.setState({ class: classes.ToolbarScroll, color: classes.black });
        }
        else {
            this.setState({ class: classes.Toolbar, color: classes.white });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <header className={this.state.class}>
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.Hide} >
                    <NavigationItem links={this.state.color} />
                </nav>
            </header>
        )
    }
}

export default toolbar;