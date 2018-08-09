/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
export function loadLocations () {
    return (dispatch) => {
        axios.get(`${url}locations`)
        .then((res) => {
            let locations = res.data
            dispatch({type:'LOAD_LOCATIONS', locations})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getUser (_id) {
    return axios.get(`${url}user/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}
export function getUserProfile (_id) {
    return (dispatch) => {
        axios.get(`${url}user/profile/${_id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch(err=>console.log(err))
    }
}
export function getLocation (location_id) {
    return (dispatch) => {
        axios.get(`${url}location/${location_id}`)
        .then((res) => {
            let location = res.data
            dispatch({type: 'VIEW_LOCATION', location})
        }).catch((err) => console.log(err))
    }
}
// locations_id, owner_id, comment
export function invest (location_id, investor_id, amount) {
    return (dispatch) => {
      axios.post(`${url}location/invest`,{ location_id, investor_id, amount }).then((res) => {
          dispatch({type:'INVEST_LOCATION'})
      }).catch((err)=>console.log(err))
    }
}
export function like (location_id) {
    return (dispatch) => {
        axios.post(`${url}location/like`,{ location_id }).then((res) => {
            dispatch({type:'LIKE_LOCATION'})
        }).catch((err)=>console.log(err))
    }
}
export function SignInUser (user_data) {
    return (dispatch) => {
        axios.post(`${url}user`,user_data).then((res)=>{
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
        }).catch((err)=>console.log(err))
    }
}
export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})
    }
}
