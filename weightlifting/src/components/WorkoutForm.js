import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import desktopAddWorkoutImage from '../images/addworkout.jpg';
import mobileAddWorkoutImage from '../images/landing-mobile.jpg';

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
border: 3px solid #17A2B8;
background-color: #ffffff;
max-width: 80%;
min-width: 400px;
padding-bottom: 50px;
`

const NavDashboard = styled.div`
dislplay: flex;
flex-direction: row;
align-items: space-around;
background-color: lightgray;
padding: 20px 0;
width: 100%;
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
background-color: #17A2B8;
border-radius: 8px;
font-size: 1rem;
width: 200px;
height: 35px;
`


const WorkoutForm = (props) => {
    const [user, setUser] = useState({
        name: "",
        date: "",
        reps: "",
        muscle: ""
    });

    const handleSubmit = e => {
        props.addPost(user)
        e.preventDefault();
        console.log(` WORKOUT FORM `, user)
        
    }

    const handleChanges = e => {
        let name = e.target.name;

        setUser({ ...user, [name]: e.target.value })
    }

    const imageUrl = useWindowWidth() >= 650 ? desktopAddWorkoutImage : mobileAddWorkoutImage;

    return(
    
        <MainWorkout className="landing" style={{backgroundImage: `url(${imageUrl})` }}>
            <FormWorkout >
            <NavDashboard> 
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/dashboard"> My Profile </NavLink>
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/addworkout"> Add a New Workout </NavLink>
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/myworkouts" > My Workouts </NavLink>
            </NavDashboard>
        
            <TitleAddWorkout>Add a New Workout</TitleAddWorkout>
            <ContentWorkout>
            <TextWorkout>Exercise</TextWorkout>
            <InputWorkout placeholder='Name of Exercise' 
                        name='name' 
                        type= 'text'
                        value={props.name} 
                        onChange={handleChanges}/>
            <TextWorkout>Weight</TextWorkout>
            <InputWorkout placeholder='Weight' 
                        name='weight' 
                        type= 'text'
                        value={props.date}
                        onChange={handleChanges}/>
            <TextWorkout>Number of Reps</TextWorkout>
            <InputWorkout placeholder='Number of Reps' 
                        name='reps' 
                        type= 'text'
                        value={props.reps}
                        onChange={handleChanges}/>
            <TextWorkout>Focus</TextWorkout>
            <InputWorkout placeholder='Muscle Group Targeted' 
                        name='muscle' 
                        type= 'text'
                        value={props.muscle}
                        onChange={handleChanges}/>
            </ContentWorkout>
            <ButtonWorkout type='submit' onClick={handleSubmit}>Submit</ButtonWorkout>
        </FormWorkout>
    </MainWorkout>
    );
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

export default WorkoutForm;
