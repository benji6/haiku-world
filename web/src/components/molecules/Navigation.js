import {createElement} from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => createElement('nav', {className: 'Navigation'},
  createElement(NavLink, {activeClassName: 'Navigation__Link--active', className: 'Navigation__Link', exact: true, to: '/'}, 'Home'),
  createElement(NavLink, {activeClassName: 'Navigation__Link--active', className: 'Navigation__Link', exact: true, to: '/compose'}, 'Compose'),
  createElement(NavLink, {activeClassName: 'Navigation__Link--active', className: 'Navigation__Link', exact: true, to: '/about'}, 'About')
)

Navigation.propTypes = {}

export default Navigation
