import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux'

import {deleteWorkout} from "../actions/"


const Button = styled.button`
    width: 3rem;
    margin: 2% auto;
    background-color: #4169E1;
    color: #fff;
    font-size: 0.7rem;
    text-decoration: none;
`;

const WorkoutCard = props => {


    const id = props.id;

    const Processing = () => {
        props.history.push('/workit');

        setTimeout(()=>{
            props.history.push('/')
        }, 1000) 
    }   

    const deleteWorkout = () => {
        props.deleteWorkout(id)
       // Processing()
    }


    const EditWorkout = () => {
        console.log('might work', props)
       props.history.push(`/editworkout/`)
    }

    return (
        <div className="workout-card">
            <div>
                <h3>{props.exercise}</h3>
                <p>Reps: {props.reps}</p>
                <p>Muscle:{props.muscle}</p>
            </div>
            <Button onClick={EditWorkout(id)}>Edit</Button>
            <Button onClick={deleteWorkout}>Delete</Button>
        </div>


    );
};

export default connect( state => {
    return {
        workouts: state.workouts,
        isFetching: state.isFetching,
        error: state.workouts
    }
 }, {deleteWorkout}) (WorkoutCard);