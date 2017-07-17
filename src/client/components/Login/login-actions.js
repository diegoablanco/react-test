import client from '../../services/feathers-client'
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS'
export const LOGIN_AUTH_FAIL = 'LOGIN_AUTH_FAIL'
export const LOGOUT_AUTH_SUCCESS = 'LOGOUT_AUTH_SUCCESS'

export function LOGIN_AUTH(data) {
    return dispatch => {
        client.authenticate({
                strategy: 'local',
                email: data.email,
                password: data.password
            }).then(response => {
                console.log('Authenticated!', response);
                dispatch({
                    type: LOGIN_AUTH_SUCCESS
                })
            })
            .catch(function (error) {
                console.error('Error authenticating!', error);
                dispatch({
                    type: LOGIN_AUTH_FAIL
                })
            })
    }
}