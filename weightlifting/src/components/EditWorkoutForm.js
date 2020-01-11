import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

import desktopAddWorkoutImage from '../images/viewworkout.jpg';
import mobileAddWorkoutImage from '../images/viewworkout-mobile.jpg';

const MainWorkout = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 10%;
`

const FormWorkout = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 3px solid #FF914D;
background-color: #ffffff;
max-width: 80%;
min-width: 400px;
padding-bottom: 50px;
margin-top: -60px;
`

const TitleAddWorkout = styled.h3`
text-align: center;
margin: 10% 0;
`

const ContentWorkout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0 40px 0;
width: 90%;
`

const TextWorkout = styled.p`
display: flex;
flex-direction: column;
`

const InputWorkout =styled.input`
padding: 5px 0;
width: 100%;
`

const ButtonWorkout = styled.button`
background-color: #FF914D;;
border-radius: 8px;
font-size: 1rem;
width: 200px;
height: 35px;
`

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

    const imageUrl = useWindowWidth() >= 650 ? desktopAddWorkoutImage : mobileAddWorkoutImage;

    return (

        <MainWorkout className="landing" style={{backgroundImage: `url(${imageUrl})` }}>
        <FormWorkout onSubmit={handleSubmit} >
        <TitleAddWorkout>Edit Workout</TitleAddWorkout>
        <ContentWorkout>
        <TextWorkout>Exercise</TextWorkout>
        <InputWorkout placeholder='Name of Exercise' 
                    name='exercise' 
                    type= 'text'
                    value={edit.exercise} 
                    onChange={handleChange}/>
        
        <TextWorkout>Number of Reps</TextWorkout>
        <InputWorkout placeholder='Number of Reps' 
                    name='reps' 
                    type= 'text'
                    value={edit.reps}
                    onChange={handleChange}/>
        
        <TextWorkout>Focus</TextWorkout>
        <InputWorkout placeholder='Muscle Group Targeted' 
                    name='muscle' 
                    type= 'text'
                    value={edit.muscle}
                    onChange={handleChange}/>
        
        </ContentWorkout>
        <ButtonWorkout type='submit' >Submit Edits</ButtonWorkout>
        </FormWorkout>
        </MainWorkout>
    )
    
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
    };


export default EditWorkoutForm;

