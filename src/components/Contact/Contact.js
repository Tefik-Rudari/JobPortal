import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Auxiliry from '../../hoc/Auxiliry'
import classes from './Contact.css';
import index from '../Body/Body';
// import GoogleMapReact from 'google-map-react';
import Newsletter from '../Body/Newsletter/Newsletter';
import Footer from '../Footer/Footer';

const AnyReactComponent = ({ text }) => <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
}}></div>;

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  

class Contact extends Component {

    static defaultProps = {
        center: {
            lat: 42.6629,
            lng: 21.1655
        },
        zoom: 10
    };


    render() {
        return (
            <Auxiliry>
                {/* Header */}
                <div className={classes.body} >
                    <div className={`text-center text-white`}>
                        <div className={[classes.links, `d-inline`].join(' ')}>
                            <pre>
                                <Link className={classes.link} to={'/'}>HOME</Link>
                                <Link className={[classes.link, ``].join(' ')}>   CANDIDATES</Link>
                            </pre>
                        </div>
                        <h1>Candidates</h1>
                    </div>
                    <Switch>
                        <Route path={this.props.location.pathname + '/index'} exact component={index} />;
                    </Switch>
                </div>
                {/* The end of header */}
                <section className={[classes.ftcoSection, `contact-section bg-light`].join(' ')}>
                    <div className={classes.container}>
                        <div className={[classes.row, `d-flex mb-5 contact-info`].join(' ')}>
                            <div className={`col-md-12 mb-4`}>
                                <h2 className={classes.h3}>Contact Information</h2>
                            </div>
                            <div className={`w-100`}></div>
                            <div className={`col-md-3`}>
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            <div className={`col-md-3`}>
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                            </div>
                            <div className={`col-md-3`}>
                                <p><span>Email:</span> <a href="mailto: info@yoursite.com">info@yoursite.com</a></p>
                            </div>
                            <div className={`col-md-3`}>
                                <p><span>Website</span> <a href="/">yoursite.com</a></p>
                            </div>
                        </div>
                        <div className={[classes.row, `block-9`].join(' ')}>
                            <div className={`col-md-6 order-md-last d-flex`}>
                                <form action="#" className={`bg-white p-5 contact-form`} style={{ width: '100% '}}>
                                    <div className={`form-group`}>
                                        <input type="text" className={`form-control`} placeholder="Your Name" />
                                    </div>
                                    <div className={`form-group`}>
                                        <input type="text" className={`form-control`} placeholder="Your Email" />
                                    </div>
                                    <div className={`form-group`}>
                                        <input type="text" className={`form-control`} placeholder="Subject" />
                                    </div>
                                    <div className={`form-group`}>
                                        <textarea name="" id="" cols="30" rows="7" className={`form-control`} placeholder="Message"></textarea>
                                    </div>
                                    <div className={`form-group`}>
                                        <input type="submit" value="Send Message" className={`btn btn-primary py-3 px-5`} />
                                    </div>
                                </form>

                            </div>

                            <div className={`col-md-6 d-flex`}>
                                <div style={{ height: '530px', width: '100%' }}>
                                    {/* <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyBF_YuCeTD4gz0zVKpu13NNXplNbNuLEUk' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                        yesIWantToUseGoogleMapApiInternals
                                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                                            >
                                            <AnyReactComponent
                                                lat={42.6629}
                                                lng={21.1655}
                                            />
                                    </GoogleMapReact> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter />
                <Footer />
            </Auxiliry>
        )
    }
}

export default Contact;