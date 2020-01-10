import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const Button = styled.button`
    width: 3rem;
    margin: 2% auto;
    color: white;
    background-color: blue;
    font-size: 0.7rem;
    text-decoration: none;
`;

const WorkoutCard = props => {

    console.log('testing props')


    const id = props.id;

    const DeleteWorkout = () => {
        axiosWithAuth()
            .delete(`https://authbackend121.herokuapp.com/api/auth/workout/${id}`)
            .then(response => {
                console.log('deleted workout', response);
            })
            .catch(err => console.log(err.response));
    }

   

    const EditWorkout = () => {
        console.log('did it work?', props)
        props.history.push(`/editworkout/${id}`)
    }


    return (
        <div >
            <h2>Workout</h2>
            <div>
                <Link to={`/workouts/${props.id}`}>Name: {props.workout}</Link>
               
            </div>
            <Button onClick={EditWorkout}>Edit</Button>
            <Button onClick={DeleteWorkout}>Delete</Button>

        </div>


    );
};

export default WorkoutCard;