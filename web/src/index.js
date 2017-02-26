import './styles.js'

import {createElement} from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Compose from './components/pages/Compose'
import Header from './components/organisms/Header'
import Home from './components/pages/Home'

render(
  createElement(HashRouter, null,
    createElement('div', null,
      createElement(Route, {component: Header}),
      createElement(Route, {component: Home, exact: true, path: '/'}),
      createElement(Route, {component: Compose, exact: true, path: '/compose'})
    )
  ),
  document.getElementById('root')
)
