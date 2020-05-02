import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'

import {deleteWorkout} from "../actions";




const Button = styled.button`
    width: 3rem;
    margin: 1rem;
    background-color: #4169E1;
    color: #fff;
    font-size: 0.7rem;
    text-decoration: none;
    
`;

const WorkoutCard = props => {

    // console.log(props)
    // const id = props.id;

    // const Processing = () => {
    //     props.history.push('/workit');

    //     setTimeout(() => {
    //         props.history.push('/')
    //     }, 1000)
    // }   

    // const deleteWorkout= () => {
    //     props.deleteWorkout(id)
    //     Processing();
    // }


    // const EditWorkoutForm = (id) => {
       
    //    props.history.push(`/editworkout/${id}`)
    

    // }

    console.log('testing out props')

    // const [erase, setErase] = useState({});

    const id = props.id;

    const Processing = () => {
        props.history.push(`/workit`);

        setTimeout(()=>{
            props.history.push('/')
        }, 1000) 
    }   

    const deleteWorkout = () => {
        props.deleteWorkout(id)
        Processing()
    }


    const editWorkout = () => {
        console.log('by god', props)
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
          <Button onClick={editWorkout}>Edit</Button> 

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