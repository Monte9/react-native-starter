export default function( state, action ) {
  const routes = state.routes.slice();
  routes.push(action.route);

  return {
    ...state,
    prevPushedRoute: action.route,
    index: routes.length - 1,
    routes,
  }
}
