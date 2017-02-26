import {createElement, PropTypes} from 'react'

const Card = ({children}) => createElement('div', {className: 'Card'},
  children
)

Card.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Card
