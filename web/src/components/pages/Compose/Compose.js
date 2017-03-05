import {createElement, PropTypes} from 'react'
import HaikuForm from '../../organisms/HaikuForm'

const Compose = ({haikusPost}) => createElement('div', null,
  createElement(HaikuForm, {onSubmit: haikusPost})
)

Compose.propTypes = {
  haikusPost: PropTypes.func.isRequired,
}

export default Compose
