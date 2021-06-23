import * as actionTypes from '../actions/actionTypes';

const initialState = {
    contents: ['Mirististica', 'Vet'], value: '', works: []
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.SEARCH: {
            const {value} = action;
            const works = state.contents.filter((val) => val.includes(value));
            return {...state, value, works};
        }
        default:
            return state;
    }
};

export default reducer;