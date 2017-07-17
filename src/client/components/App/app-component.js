import React, {Component} from 'react'
import {matchPath} from 'react-router'
import PropTypes from 'prop-types'
import {Dimmer, Sidebar, Container} from 'semantic-ui-react'
import {Header, SidebarComponent, Footer} from '../../components'
import {appRouting} from '../../routing'
import './App.scss'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // react-router `withRouter` props
    location: PropTypes.object,
    history: PropTypes.object,
    // sidebarOpened can force component to re-render
    sidebarOpened: PropTypes.bool,
    closeSidebar: PropTypes.func,
    // isLoggedIn can force component to re-render
    isLoggedIn: PropTypes.bool,
    handleWindowResize: PropTypes.func,
    logout: PropTypes.func,
    toggleSidebar: PropTypes.func,
    // isMobile can force component to re-render
    isMobile: PropTypes.bool
  }

  componentWillMount () {
    let {handleWindowResize, isLoggedIn} = this.props
    if (process.env.BROWSER) {
      window.addEventListener('resize', handleWindowResize)
    }
    this.checkAppAuthLogic(isLoggedIn)
  }

  checkAppAuthLogic (loggedIn) {
    const {location, checkAuthLogic} = this.props
    const path = location.pathname
    checkAuthLogic(path, loggedIn)
  }

  componentWillReceiveProps (nextProps) {
    this.checkAppAuthLogic(nextProps.isLoggedIn)
  }

  getSidebarRouting () {
    const sidebarRouting = appRouting.filter(route => route.sidebarVisible).map(route => {
      const {path, name, icon, external, strict, exact} = route
      return {path, name, icon, external, strict, exact}
    })
    return sidebarRouting
  }

  getPageTitle (pathname) {
    const matchedRoutes = appRouting.filter(route => matchPath(pathname, route))
    const currentRoute = matchedRoutes[0] || {}
    const title = currentRoute.name || '404'
    return title
  }

  render () {
    const {
      children,
      sidebarOpened,
      closeSidebar,
      isLoggedIn,
      logout,
      toggleSidebar,
      location,
      isMobile
    } = this.props

    // routing for sidebar menu
    const sidebarRouting = this.getSidebarRouting()
    const title = this.getPageTitle(location.pathname)

    const sidebarProps = {
      isMobile,
      logout,
      open: sidebarOpened,
      routing: sidebarRouting
    }

    const headerProps = {
      toggleSidebar,
      title,
      isLoggedIn
    }

    const dimmerProps = {
      active: true,
      onClick: closeSidebar
    }

    return (
      <div className="page-layout">
        <Sidebar.Pushable>
          {isLoggedIn && <SidebarComponent {...sidebarProps} />}
          <Sidebar.Pusher>
            <Header {...headerProps} />
            <main>
              <div className="main-content">
                <Container>
                  {children}
                </Container>
              </div>
              <Footer />
            </main>
            {isLoggedIn && sidebarOpened && <Dimmer {...dimmerProps} />}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
