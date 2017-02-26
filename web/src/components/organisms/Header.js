import {createElement} from 'react'
import Navigation from '../molecules/Navigation'

const Header = () => createElement('header', {className: 'Header'},
  createElement('h1', {className: 'Header__Title'}, 'Haiku World'),
  createElement(Navigation)
)

Header.propTypes = {}

export default Header
