import {createElement} from 'react'
import Button from '../atoms/Button'
import TextArea from '../atoms/TextArea'

const Compose = () => createElement('h2', null,
  'Compose',
  createElement(TextArea),
  createElement(Button, null, 'OK')
)

Compose.propTypes = {}

export default Compose
