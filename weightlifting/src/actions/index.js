import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';


export const addPost = (post) => (dispatch) => {
    axiosWithAuth()
      .post('api/workout/', post)
      .then (res => {
        dispatch({ 
          type: ADD_POST, payload: res});
      })
      .catch(err => console.log(err))
    }