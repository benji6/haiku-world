import {createElement} from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => createElement('nav', {className: 'Navigation'},
  createElement(Link, {className: 'Navigation__Link', to: '/'}, 'Home'),
  createElement(Link, {className: 'Navigation__Link', to: '/compose'}, 'Compose')
)

Navigation.propTypes = {}

export default Navigation
