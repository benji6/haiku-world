import {createElement, PropTypes} from 'react'

const Button = ({children, type = 'button'}) => createElement('button', {className: 'Button', type}, children)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
