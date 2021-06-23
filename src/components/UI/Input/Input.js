import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={props.class}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={props.class}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={props.class}
                    value={props.value}
                    onChange={props.changed} >
                        {props.elementConfig.options.map(option => (
                            <option value={option.value} key={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={props.class}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
    }

    return (
        <div className={props.lbldiv}>
            <label className={props.labelClass}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;