import * as actionTypes from './actionTypes';
import axios from 'axios';
// import { Link, Switch, Route } from 'react-router-dom';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        // authData: authData
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const register = (firstName, lastName, gender, email, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            name: firstName,
            surname: lastName,
            gender: gender,
            email: email,
            password: password,
            email_verified_at: true,
            remember_token: true
        };

        axios.post('http://wad-team.com/backend/api/user/register', authData, {
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            }
        }
        )
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
                alert('Please login now');
                window.location.reload(true);
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response));
                alert('faild');
            });
    };
};

export const signin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        axios.post('http://wad-team.com/backend/api/login', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                alert('Successfully');
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response));
            });
    };
}