import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { CLOSE_SIDEBAR, OPEN_SIDEBAR, WINDOW_RESIZE, LOGOUT_AUTH } from './app-actions'
import App from './app-component'

function mapStateToProps (state) {
  return {
    sidebarOpened: state.layout.sidebarOpened,
    isMobile: state.layout.isMobile,
    isLoggedIn: state.auth.loggedIn
  }
}

function mapDispatchToProps (dispatch) {
  let resizer
  return {
    closeSidebar: () => {
      dispatch(CLOSE_SIDEBAR())
    },
    logout: () => {
      dispatch(LOGOUT_AUTH())
    },
    toggleSidebar: () => {
      dispatch(OPEN_SIDEBAR())
    },
    checkAuthLogic: (path, isLoggedIn) => {
      const authPath = '/auth'
      const homePath = '/'
      if (isLoggedIn && path === authPath) {
        dispatch(push(homePath))
      }
    },
    handleWindowResize: () => {
      clearTimeout(resizer)
      resizer = setTimeout(() => dispatch(WINDOW_RESIZE()), 100)
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))