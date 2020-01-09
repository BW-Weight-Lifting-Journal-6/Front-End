import {
    ADD_POST
  
  } from '../actions';

  const initialState = {
    exercises: [],
    isFetching: false,
    error: ""
  }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
            ...state,
            exercises: action.payload.data
        }
    default:
        return state
}
} 

export default reducer;