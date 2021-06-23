import React from 'react';

import paper from '../../../assets/images/bb.jpg';
import Classes from './WallPaper.css'; 

const wallPaper = ( props ) => (
    <div className={Classes.Paper}>
        <img src={paper} alt="Wallpaper" />
    </div>
);

export default wallPaper;