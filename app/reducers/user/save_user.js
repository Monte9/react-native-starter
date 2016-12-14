export default function( state, action ) {
  return Object.assign({}, state, {
    user: action.user,
    user_updated: true,
  });
}
