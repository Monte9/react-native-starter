import {
  SAVE_EXPLORE_INDEX,
} from '../actions/feed'

import saveExploreIndex from './feed/save_explore_index'

const initialState = {
  index: null,
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case SAVE_EXPLORE_INDEX:
      return saveExploreIndex( state, action )
    default:
      return state
  }
}
