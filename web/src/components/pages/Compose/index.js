import {connect} from 'react-redux'
import {haikusPost} from '../../../store/actions'
import Compose from './Compose'

const mapStateToProps = undefined

const mapDispatchToProps = {
  haikusPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose)
