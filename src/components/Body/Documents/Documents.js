import React from 'react';

import Auxiliry from '../../../hoc/Auxiliry';
import classes from './Documents.css';
import resume from '../../../assets/images/Documents/resume.png'
import team from '../../../assets/images/Documents/team.png'
import leaderboard from '../../../assets/images/Documents/leaderboard.png'
import group from '../../../assets/images/Documents/group.png'

const documents = (props) => {
    return (
        <Auxiliry>
            <div className={classes.container}>
                <div className={classes.boxes}>
                    <div className={classes.box}>
                        <img src={resume} alt="resume" />
                        <h2>Search Millions of Jobs</h2>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    <div className={classes.box}>
                        <img src={team} alt="team" />
                        <h2>Easy To Manage Jobs</h2>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    <div className={classes.box}>
                        <img src={leaderboard} alt="leaderboard" />
                        <h2>Top Careers</h2>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    <div className={classes.box}>
                        <img src={group} alt="group" />
                        <h2>Search Expert Candidates</h2>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                </div>
            </div>
        </Auxiliry>
    )
}

export default documents;