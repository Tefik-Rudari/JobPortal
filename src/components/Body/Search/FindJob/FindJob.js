import React, { Component } from 'react';

import Auxiliry from '../../../../hoc/Auxiliry';
import classes from './FindJob.css';
// import IconButton from '@material-ui/core/IconButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import Input from '../../../UI/Input/Input';

class FindJob extends Component {
    state = {
        orderForm: {
            eg: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'eg. Garphic. Web Developer'
                },
                class: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: '', displayValue: 'Category' },
                        { value: 'Full Time', displayValue: 'Full Time' },
                        { value: 'Part Time', displayValue: 'Part Time' },
                        { value: 'Freelance', displayValue: 'Freelance' },
                        { value: 'Intership', displayValue: 'Intership' },
                        { value: 'Temporary', displayValue: 'Temporary' }
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            loaction: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'loaction'
                },
                class: '',
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
        },
        selected: true
    }

    // icons = () => {
    //     <Auxiliry>
    //         <IconButton>
    //             <FontAwesomeIcon className={classes.icons} icon={faSuitcase} size="md"></FontAwesomeIcon>
    //         </IconButton>
    //     </Auxiliry>
    // }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updateFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
        updatedOrderForm[inputIdentifier] = updateFormElement;
        console.log(updateFormElement);
        this.setState({ orderForm: updatedOrderForm });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form action='/' className={[classes.forma, 'col-lg-12 col-md-12 col-sm-12'].join(' ')}>
                {formElementsArray.map(formElement => (
                    <Input
                        labelClass={classes.lbl}
                        lbldiv={['col-lg-3 col-md-12 col-sm-12'].join(' ')}
                        class={classes.Input}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button className={[classes.Search, classes.paragraf, 'col-lg-3 col-md-12 col-sm-12'].join(' ')}>Search</button>
            </form>
        )

        return (

            <Auxiliry>
                <div className={[classes.block, 'col-lg-9 col-md-9 col-sm-9'].join(' ')}>
                    {form}
                </div>

            </Auxiliry >
        )
    }
};

export default FindJob;