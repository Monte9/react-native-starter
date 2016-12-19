//FEED TAB BAR ACTIONS
export const PUSH_ROUTE_FEED = 'PUSH_ROUTE_FEED'
export const POP_ROUTE_FEED = 'POP_ROUTE_FEED'
export const RESTART_ROUTE_FEED = 'RESTART_ROUTE_FEED'

export function push_feed(route) {
  return {
    type: PUSH_ROUTE_FEED,
    route
  }
}

export function pop_feed() {
  return {
    type: POP_ROUTE_FEED
  }
}

export function restart_feed(route) {
  return {
    type: RESTART_ROUTE_FEED,
    route
  }
}

//PORTFOLIO TAB BAR ACTIONS
export const PUSH_ROUTE_PORTFOLIO = 'PUSH_ROUTE_PORTFOLIO'
export const POP_ROUTE_PORTFOLIO = 'POP_ROUTE_PORTFOLIO'

export function push_portfolio(route) {
  return {
    type: PUSH_ROUTE_PORTFOLIO,
    route
  }
}

export function pop_portfolio() {
  return {
    type: POP_ROUTE_PORTFOLIO
  }
}

//PROFILE TAB BAR ACTIONS
export const PUSH_ROUTE_PROFILE = 'PUSH_ROUTE_PROFILE'
export const POP_ROUTE_PROFILE = 'POP_ROUTE_PROFILE'

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
