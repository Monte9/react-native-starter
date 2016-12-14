export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'

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
