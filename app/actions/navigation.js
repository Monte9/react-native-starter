export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'

export const PUSH_ROUTE_PROFILE = 'PUSH_ROUTE_PROFILE'
export const POP_ROUTE_PROFILE = 'POP_ROUTE_PROFILE'

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop() {
  return {
    type: POP_ROUTE
  }
}

export function push_profile(route) {
  console.log("here?")
  return {
    type: PUSH_ROUTE_PROFILE,
    route
  }
}

export function pop_profile() {
  return {
    type: POP_ROUTE_PROFILE
  }
}
