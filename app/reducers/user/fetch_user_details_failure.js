export default function( state, action ) {
  return Object.assign({}, state, {
    user_updated: false,
    error: action.error
  });
}
