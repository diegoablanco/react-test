import React, { Component as ReactComponent } from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {pages} from '../../constants/common'

class PrivateRouteContainer extends ReactComponent {
    static propTypes = {
        component: PropTypes.func,
    }
    render() {
        const {component: Component, ...rest} = this.props
        return <Route {...rest} render={props => 
            (
                this.props.login.loginSuccess 
                    ? <Component />
                    : <Redirect to={{ pathname: pages.LOGIN_PAGE, state: { from: props.location } }}/>
            )}/>
    }
}

export default PrivateRouteContainer
