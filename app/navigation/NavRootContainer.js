import { connect } from 'react-redux'
import NavigationCardStackContainer from './NavigationCardStackContainer'
import { push, pop} from '../actions/navigation'

function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}

export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    pop: () => pop(),
  }
)(NavigationCardStackContainer)
