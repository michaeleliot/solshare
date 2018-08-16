const initialState = {
    locations: [],
    location: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_LOCATIONS' :
          return {
              ...state,
              locations: action.locations
          }
        case 'VIEW_LOCATION':
          return {
              ...state,
              location: action.location
          }
        case 'LIKE_LOCATION':
          let location = Object.assign({}, state.location)
          location.likes++
          return {
              ...state,
              location: location
          }
        case 'INVEST_LOCATION':
          location.total_funded += action.amount; //TODO replace this with the inputed value
          return {
              ...state,
              location: location
          }
        default:
            return state
    }
}
