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
        console.log(location)
        return {
            ...state,
            location: location
        }
        case 'INVEST_LOCATION':
        let location = Object.assign({}, state.location)
        location.total_funded += PLACEHOLDER; //TODO replace this with the inputed value
        console.log(location)
        return {
            ...state,
            location: location
        }
        default:
            return state
    }
}
