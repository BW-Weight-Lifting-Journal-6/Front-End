import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'

import {deleteWorkout} from "../actions";
import {EditWorkoutForm} from '../actions/index.js';


const Button = styled.button`
    width: 3rem;
    margin: 1rem;
    background-color: #4169E1;
    color: #fff;
    font-size: 0.7rem;
    text-decoration: none;
    
`;

const WorkoutCard = (props) => {

 console.log(props)
    const id = props.id;

//  const Processing = id => {
//      props.history.push('/workit');

//      setTimeout(() => {
//          props.history.push('/')
//      }, 1000)
//  }   

    const deleteWorkout= (id) => {
        props.deleteWorkout(id)
        // Processing();
    }

    const EditWorkoutForm = (props) => {
        console.log('might work', props)
       props.history.push(`/editworkout/${id}`)

    }

    return (
        <div className="workout-card">
            <div>
                <h4>Workout: {props.exercise}</h4> 
                <h4>Reps: {props.reps}</h4> 
                <h4>Muscle: {props.muscle}</h4> 
            </div>

          <Button onClick={deleteWorkout}>Delete</Button>
          <Button onClick={EditWorkoutForm}>Edit</Button> 

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