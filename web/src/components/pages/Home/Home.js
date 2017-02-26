import {createElement, PropTypes} from 'react'
import Card from '../../molecules/Card'

const Home = ({haikus}) => createElement('div', null,
  ...haikus.map(({body}) => createElement(Card, null, body))
)

Home.propTypes = {
  haikus: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home
