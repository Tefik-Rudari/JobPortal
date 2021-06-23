import React from 'react';

import classes from './Categories.css';

const categories = (props) => (
    <li className={classes.Categories}>
        <div className={classes.Ca}>
            <a
                href={props.link}
                className={props.active}>{props.children}<br />
                <span className={classes.Number}>{props.number}</span>
                <span className={classes.Position}>{props.position}</span></a>
        </div>
    </li>
);

export default categories;