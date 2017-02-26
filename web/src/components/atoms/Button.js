import {createElement, PropTypes} from 'react'

const Button = ({children}) => createElement('button', null, children)

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
