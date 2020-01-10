import { CREATE_WORKOUT_START, CREATE_WORKOUT_SUCCESS, CREATE_WORKOUT_FAILURE, DELETE_WORKOUT_START, DELETE_WORKOUT_SUCCESS, DELETE_WORKOUT_FAILURE, FETCH_WORKOUT_START, FETCH_WORKOUT_SUCCESS, FETCH_WORKOUT_FAILURE } from "../actions/";

const initialState = {
    workouts: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log('reducer is reducing', action );
    switch(action.type){
        case CREATE_WORKOUT_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case CREATE_WORKOUT_SUCCESS:
            return {
                ...state,
                workouts: [...state],
                error: null
            }
        case CREATE_WORKOUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                workouts: []
            }
        case DELETE_WORKOUT_START:
            return {
                    ...state,
                    isFetching: true,
                    error: null 
                }
            case DELETE_WORKOUT_SUCCESS:
                return {
                    ...state,
                    workouts: action.payload,
                    error: null
                }
            case DELETE_WORKOUT_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    workouts: []
                }
             case FETCH_WORKOUT_START:
                    return {
                            ...state,
                            isFetching: true,
                            error: null 
                        }
            case FETCH_WORKOUT_SUCCESS:
                    return {
                            ...state,
                            workouts: action.payload,
                            error: null
                        }
                case FETCH_WORKOUT_FAILURE:
                    return {
                            ...state,
                            error: action.payload,
                            workouts: []
                        }    
        default: 
            return state;
    }
}