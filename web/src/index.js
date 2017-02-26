import './styles.js'

import {createElement} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'
import Compose from './components/pages/Compose'
import Header from './components/organisms/Header'
import Home from './components/pages/Home'
import store from './store'

render(
  createElement(HashRouter, null,
    createElement(Provider, {store},
      createElement('div', null,
        createElement(Route, {component: Header}),
        createElement(Route, {component: Home, exact: true, path: '/'}),
        createElement(Route, {component: Compose, exact: true, path: '/compose'})
      )
    )
  ),
  document.getElementById('root')
)
