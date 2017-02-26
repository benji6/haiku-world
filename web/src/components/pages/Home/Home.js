import {createElement, PropTypes} from 'react'
import Card from '../../molecules/Card'

const Home = ({haikus}) => createElement('div', {className: 'Home'},
  ...haikus.map(({body}) => createElement(Card, null, body))
)

Home.propTypes = {
  haikus: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
