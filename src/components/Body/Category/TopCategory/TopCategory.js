import React from 'react';

import classes from './TopCategory.css';
import Categories from './Categories/Categories';

const TopCategory = () => (
    <div>
        <div className={classes.main}>
            <span>JOB CATEGORIES</span>
            <h2>Top Categories</h2>
        </div>
        <div className={classes.row}>
            <div className={classes.Colon}>
                <ul className={classes.Category}>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                </ul>
            </div>
            <div className={classes.Colon}>
                <ul className={classes.Category}>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                </ul>
            </div>
            <div className={classes.Colon}>
                <ul className={classes.Category}>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                </ul>
            </div>
            <div className={classes.Colon}>
                <ul className={classes.Category}>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                    <Categories link="/" className={classes.Categories} number="45" position="Open position">Web Developer</Categories>
                </ul>
            </div>
        </div>
    </div>
)

export default TopCategory;