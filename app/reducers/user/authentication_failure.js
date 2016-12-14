export default function( state, action ) {
  return Object.assign({}, state, {
    isAuthenticating: false,
    error: action.error
  });
}
