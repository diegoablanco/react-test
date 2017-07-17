import client from '../../services/feathers-client'
export const UI_WINDOW_RESIZE = 'UI_WINDOW_RESIZE'
export const UI_OPEN_SIDEBAR = 'UI_OPEN_SIDEBAR'
export const UI_CLOSE_SIDEBAR = 'UI_CLOSE_SIDEBAR'
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS'
export const LOGIN_AUTH_FAIL = 'LOGIN_AUTH_FAIL'
export const LOGOUT_AUTH_SUCCESS = 'LOGOUT_AUTH_SUCCESS'

export const OPEN_SIDEBAR = () => ({
  type: UI_OPEN_SIDEBAR
})
export const CLOSE_SIDEBAR = () => ({
  type: UI_CLOSE_SIDEBAR
})

export const WINDOW_RESIZE = () => ({
  type: UI_WINDOW_RESIZE
})
export function LOGOUT_AUTH() {
    return dispatch => {
        client.logout().then(dispatch({
            type: LOGOUT_AUTH_SUCCESS
        }));
    }
}