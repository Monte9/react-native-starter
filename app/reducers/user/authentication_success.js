export default function( state, action ) {
  return Object.assign({}, state, {
    isAuthenticating: false,
    token: action.token
  });
}
