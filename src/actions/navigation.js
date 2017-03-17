//MAIN NAVIGATION ACTIONS
export const PUSH_ROUTE_MAIN = 'PUSH_ROUTE_MAIN'
export const POP_ROUTE_MAIN = 'POP_ROUTE_MAIN'
export const RESTART_ROUTE_MAIN = 'RESTART_ROUTE_MAIN'

export function push_main(route) {
  return {
    type: PUSH_ROUTE_MAIN,
    route
  }
}

export function pop_main() {
  return {
    type: POP_ROUTE_MAIN
  }
}

export function restart_main(route) {
  return {
    type: RESTART_ROUTE_MAIN,
    route
  }
}
