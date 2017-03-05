import {createElement, PropTypes} from 'react'
import {Field, reduxForm} from 'redux-form'
import Button from '../atoms/Button'

const HaikuForm = ({handleSubmit}) => createElement('form', {
  className: 'HaikuForm',
  onSubmit: handleSubmit,
},
  createElement('label', {className: 'HaikuForm__Label'},
    'Compose your haiku:',
    createElement(Field, {
      className: 'HaikuForm__Input',
      component: 'textarea',
      height: '2rem',
      name: 'body',
      width: '12rem',
    })
  ),
  createElement(Button, {type: 'submit'}, 'OK')
)

HaikuForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({form: 'haiku'})(HaikuForm)
