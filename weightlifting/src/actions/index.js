


import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_WORKOUT_START = 'FETCH_WORKOUT_START';
export const FETCH_WORKOUT_SUCCESS = 'FETCH_WORKOUT_SUCCESS';
export const FETCH_WORKOUT_FAILURE = 'FETCH_WORKOUT_FAILURE';

export const CREATE_WORKOUT_START = 'CREATE_WORKOUT_START';
export const CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS'
export const CREATE_WORKOUT_FAILURE = 'CREATE_WORKOUT_FAILURE'

export const DELETE_WORKOUT_START = 'CREATE_WORKOUT_START';
export const DELETE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS'
export const DELETE_WORKOUT_FAILURE = 'CREATE_WORKOUT_FAILURE'




export const addWorkout = (add) => dispatch => {
    dispatch({type:CREATE_WORKOUT_START })
    axiosWithAuth()
    .post(`https://weightlifting-app.herokuapp.com/api/workouts`, add )
    .then( response => {
        console.log('response from POST', response);
        dispatch({type: CREATE_WORKOUT_SUCCESS, payload: add })
    })
    .catch(error => dispatch({type: CREATE_WORKOUT_FAILURE, payload: error}))
     
}

export const deleteWorkout = id => dispatch => {
    dispatch({type: DELETE_WORKOUT_START})
    axiosWithAuth()
    .delete(`https://weightlifting-app.herokuapp.com/api/workouts/:id`, id)
    .then( response => {
        console.log('response from DELETE', response);
        dispatch({type: DELETE_WORKOUT_SUCCESS, payload: response.data})
    })
    .catch(error => dispatch({type: DELETE_WORKOUT_FAILURE, payload: error}))
}

export const getWorkout = () => dispatch => {
    dispatch({type: FETCH_WORKOUT_START })
    axiosWithAuth()
    .get(`https://weightlifting-app.herokuapp.com/api/workouts`)
    .then( response => {
        console.log('response from fetch WORKOUT', response);
        dispatch({type: FETCH_WORKOUT_SUCCESS, payload: response.data})
    })
    .catch(error => dispatch({type: FETCH_WORKOUT_FAILURE, payload: error}))
}