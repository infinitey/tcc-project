import {
  PUSH_ROUTE_MAIN,
  POP_ROUTE_PORTFOLIO
} from '../actions/navigation'

import pushRoute from './nav/push_route'
import popRoute from './nav/pop_route'

const initialState = {
  index:0,
  routes: [{ key: 'Home', type: 'home' }],
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case PUSH_ROUTE_MAIN:
      return pushRoute( state, action )
    case POP_ROUTE_PORTFOLIO:
      return popRoute( state, action )
    default:
      return state
  }
}
