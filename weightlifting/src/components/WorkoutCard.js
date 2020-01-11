import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux'
import WorkoutCardComp from "./WorkoutCardComp";

import {deleteWorkout} from "../actions/"

const WorkoutCard = props => {

console.log(props)
    const id = props.id;

    const EditWorkout = id => {
        console.log('might work', props)
        props.history.push(`/editworkout/${id}`)
    }

    return (
        <WorkoutCardComp
            exercise = {props.exercise}
            reps = {props.reps}
            muscle = {props.muscle}
            />
    );
};

export default connect( state => {
    return {
        workouts: state.workouts,
        isFetching: state.isFetching,
        error: state.workouts
    }
}, {deleteWorkout}) (WorkoutCard);