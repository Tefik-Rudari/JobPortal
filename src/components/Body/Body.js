import React, { Component } from 'react';

import Page from './Page/Page';
import Newsletter from './Newsletter/Newsletter';
import Classes from './Body.css';
import Wallpaper from '../Photo/WallPaper/WallPaper';
import Documents from './Documents/Documents';
import Jobs from './Jobs/Jobs';
import Testimonial from './Testimonial/Testimonial';
import Candidates from './Candidates/Candidates';
import Blog from './Blog/Blog';
import Search from './Search/Search';
import Footer from '../Footer/Footer';
import Category from './Category/Head/Category';
import TopCategory from './Category/TopCategory/TopCategory';

class Body extends Component {
    render() {
        return (
            <div className={Classes.Body}>
                <Wallpaper />
                <div className={Classes.MiddleDiv}>
                    <Page />
                    <Search />
                    <Category />
                </div>
                <TopCategory />
                <Documents />
                <Jobs />
                <Testimonial />
                <Candidates />
                <Blog />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}

export default Body;