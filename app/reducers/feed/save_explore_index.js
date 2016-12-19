export default function( state, action ) {
  return Object.assign({}, state, {
    index: action.index
  });
}
