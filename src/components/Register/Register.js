import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Register.css';
import Auxiliry from '../../hoc/Auxiliry';
import Input from '../UI/Input/Input';
import Footer from '../Footer/Footer';
// import * as actions from '../../store/actions/index';
import * as actions from '../../store/actions/index';

class Register extends Component {
    state = {
        registerForm: {
            firstName: {
                elementType: 'input',
                label: 'First Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                class: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                label: 'Last Name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                label: 'Gender',
                elementConfig: {
                    options: [
                        { value: 'Male', displayValue: 'Male' },
                        { value: 'Female', displayValue: 'Female' },
                    ]
                },
                value: 'M',
                validation: {
                    required: true
                },
            },
            email: {
                elementType: 'input',
                label: 'Your Email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'example@example.com'
                },
                class: '',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    password: true
                },
                class: '',
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                label: 'Confirm Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                class: '',
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    reqPassword: true
                },
                valid: false,
                touched: false
            },
        },
        loginForm: {
            email: {
                elementType: 'input',
                label: 'Your Email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'example@example.com'
                },
                class: '',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    password: true
                },
                class: '',
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        container: classes.container,
        register: false,
        isEqual: false,
        passVal: ''
    }

    // updateRegister () {
    //     const values = {
    //     }
    // }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        // if (rules.password) {
        //     this.setState({passVal: value});
        // }

        // if (rules.reqPassword) {
        //     if (this.state.password === value) {
        //         this.setState({
        //             isEqual: true
        //         })
        //     }

        //     isValid = this.state.isEqual && isValid;
        // }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedRegisterForm = {
            ...this.state.registerForm
        };
        const updateFormElement = {
            ...updatedRegisterForm[inputIdentifier]
        };
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
        updatedRegisterForm[inputIdentifier] = updateFormElement;

        // const updatedRegisterForm = {
        //     ...this.state.registerForm,
        //     [inputIdentifier]: {
        //         ...this.state.registerForm[inputIdentifier],
        //         value: event.target.value,
        //         valid: this.checkValidity(event.target.value, this.state.registerForm[inputIdentifier].validation),
        //         touched: true
        //     }
        // };
        this.setState({ registerForm: updatedRegisterForm });
    }

    inputChangedHandlerLogin = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm,
            [inputIdentifier]: {
                ...this.state.loginForm[inputIdentifier],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.loginForm[inputIdentifier].validation),
                touched: true
            }
        };
        this.setState({ loginForm: updatedLoginForm });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onRegister(
            this.state.registerForm.firstName.value,
            this.state.registerForm.lastName.value,
            this.state.registerForm.gender.value,
            this.state.registerForm.email.value,
            this.state.registerForm.password.value
        )
    }

    signinHandler = (event) => {
        event.preventDefault();
        this.props.onSignIn(
            this.state.loginForm.email.value,
            this.state.loginForm.password.value
        )
    }
    
    signInButton = () => {
        this.setState({ container: '' });
        console.log('test');
    }
    
    signUpButton = () => {
        this.setState({ container: classes.rightPanelActive })
    }


    render() {
        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
            })
        }
        const formElementsArrayLogin = [];
        for (let key in this.state.loginForm) {
            formElementsArrayLogin.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }
        let form =
            formElementsArray.map(formElement => (
                <Input
                    class={classes.Input}
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
            ))

        let login =
            formElementsArrayLogin.map(formElementt => (
                <Input
                    class={classes.Input}
                    lbldiv={classes.formdiv}
                    key={formElementt.id}
                    elementType={formElementt.config.elementType}
                    elementConfig={formElementt.config.elementConfig}
                    value={formElementt.config.value}
                    changed={(event) => this.inputChangedHandlerLogin(event, formElementt.id)}
                />
            ))

        return (

            <Auxiliry>
                <div className={classes.block}>
                    <div className={[classes.container, this.state.container].join(' ')}>
                        <div className={[classes.formContainer, classes.signUpContainer].join(' ')}>
                            <div>
                                <h1 className={[classes.header1, classes.header11].join(' ')}>Create Account</h1>
                                <form onSubmit={this.submitHandler} action={this.props.match.value + '/'} className={[classes.forma, 'col-lg-12'].join(' ')}>
                                    {form}
                                    <button className={[classes.button, 'margin-top: 15px'].join(' ')}>Sign Up</button>
                                </form>
                            </div>
                        </div>
                        <div className={[classes.formContainer, classes.signInContainer].join(' ')}>
                            <form onSubmit={this.signinHandler} className={[classes.forma, 'col-lg-12'].join(' ')}>
                                <h1 className={[classes.header1, classes.header11].join(' ')}>Sign in</h1>
                                {login}
                                <a href="/" className={classes.forgotPass}>Forgot your password?</a>
                                <button className={classes.button}>Sign in</button>
                            </form>
                        </div>
                        <div className={classes.overlayContainer}>
                            <div className={classes.overlay}>
                                <div className={[classes.overlayPanel, classes.overlayLeft].join(' ')}>
                                    <h1 className={classes.header1}>Welcome Back!</h1>
                                    <p className={classes.paragraf}>To keep connected with us please login with your personal info</p>
                                    <button className={[classes.ghost, classes.button].join(' ')} onClick={this.signInButton}>Sign In</button>
                                </div>
                                <div className={[classes.overlayPanel, classes.overlayRight].join(' ')}>
                                    <h1 className={classes.header1}>New here, Sign up!</h1>
                                    <p className={classes.paragraf}>Enter your personal details and start journey with us</p>
                                    <button className={[classes.ghost, classes.button].join(' ')} onClick={this.signUpButton}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Auxiliry >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (firstName, lastName, gender, email, password) => dispatch(actions.register(firstName, lastName, gender, email, password)),
        onSignIn: (email, password) => dispatch(actions.signin(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Register);