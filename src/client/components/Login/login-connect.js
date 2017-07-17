import { connect } from 'react-redux'
import { LOGIN_AUTH } from './login-actions'
import LoginComponent from './login-component'

function mapStateToProps (state) {
  return {
    componentState: state.loginCR
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: async data => {
      let result = await dispatch(LOGIN_AUTH(data))
      return dispatch(result)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)