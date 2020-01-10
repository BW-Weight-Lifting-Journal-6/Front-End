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

 console.log(props)
    const id = props.id;



    const EditWorkout = id => {
        console.log('might work', props)
       props.history.push(`/editworkout/${id}`)
    }

    return (
        <div className="workout-card">
            <div>
                <h3>{props.exercise}</h3>
                <p>Reps: {props.reps}</p>
                <p>Muscle:{props.muscle}</p>
            </div>
         {/* <Button onClick={EditWorkout}>Edit</Button> */}
            {/* <Button onClick={deleteWorkout}>Delete</Button> */}
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