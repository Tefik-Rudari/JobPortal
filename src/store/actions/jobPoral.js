import * as actionTypes from './actionTypes';

export const search = (value) => {
    return {
        type: actionTypes.SEARCH, 
        value: {value}
    };
};