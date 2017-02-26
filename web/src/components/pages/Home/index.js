import {connect} from 'react-redux'
import Home from './Home'

const mapStateToProps = ({haikus}) => ({haikus})

export default connect(mapStateToProps)(Home)
