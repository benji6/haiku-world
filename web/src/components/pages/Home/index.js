import {createElement, Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Home from './Home'
import {haikusFetch} from '../../../store/actions'

const mapStateToProps = ({haikus}) => ({haikus})

const mapDispatchToProps = {
  haikusFetch,
}

const HomeContainer = class extends Component {
  componentDidMount () {
    this.props.haikusFetch()
  }

  render () {
    return createElement(Home, {
      haikus: this.props.haikus,
    })
  }
}

HomeContainer.propTypes = {
  haikus: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
