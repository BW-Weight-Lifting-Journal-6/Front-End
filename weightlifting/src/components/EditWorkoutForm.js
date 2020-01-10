import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const EditWorkoutForm = (props) => {
   
    const id = props.match.params.id;
    const [edit, setEdit] = useState({
        exercise: '',
        reps: '',
        muscle: '',
        users_id: 2
    })


    const handleChange = event => {
        setEdit({ ...edit, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://weight-lifting-api.herokuapp.com/api/workout/${id}`, edit)
            .then(response => {
                console.log('response after adding workout', response.data);
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log("SignUp Login Catch Error: ", err.response.data.message);
                alert(err.response.data.message);
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="exercise"
                    placeholder="Enter Exercise"
                    onChange={handleChange}
                    value={edit.exercise}
                />
                <input
                    type="text"
                    name="reps"
                    placeholder="Number of Reps"
                    onChange={handleChange}
                    value={edit.reps}
                />
                <input
                    type="text"
                    name="muscle"
                    placeholder="Area worked"
                    onChange={handleChange}
                    value={edit.muscle}
                />
                <Button type="submit">Edit Workout</Button>
            </form>
        </Container>
    )
}


export default EditWorkoutForm;

const Button = styled.button`
background-color: #4169E1;
color: #fff;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`