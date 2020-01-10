import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import axios from '../utils/axiosWithAuth';
import { addWorkout } from '../actions';

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
background-color: #17A2B8;
border-radius: 8px;
font-size: 1rem;
width: 200px;
height: 35px;
`

const ButtonDash= styled.button`

background-color: yellow;
border-radius: 6px;
font-size: 1.7rem;
color:black;
`;


const WorkoutForm = (props) => {
    const userId = localStorage.getItem('id')
    const [add, setAdd] = useState({
        exercise: "",
        reps: "",
        muscle: "",
        user_id: userId
    });

    const handleChanges = e => {

        setAdd({ ...add, [e.target.name]: e.target.value })
    }

    

    const Processing = id => {
        props.history.push('/workit');
        setTimeout(()=>{
            props.history.push(`/dashboard`)
        }, 1000) 
    } 

    const handleSubmit = e => {
        
        e.preventDefault();
        props.addWorkout(add)
        Processing();    
    }
   

    const imageUrl = useWindowWidth() >= 650 ? desktopAddWorkoutImage : mobileAddWorkoutImage;

    return(
        <div>
            <ButtonDash>
                <NavLink style={{textDecoration: 'none', color: 'black'}} to="/dashboard"> My Profile </NavLink>
            </ButtonDash>
        <MainWorkout className="landing" style={{backgroundImage: `url(${imageUrl})` }}>
            <FormWorkout onSubmit={handleSubmit} >
             <TitleAddWorkout>Create New Workout</TitleAddWorkout>
            <ContentWorkout>
            <TextWorkout>Exercise</TextWorkout>
            <InputWorkout placeholder='Name of Exercise' 
                        name='exercise' 
                        type= 'text'
                        value={add.exercise} 
                        onChange={handleChanges}/>
            <TextWorkout>Number of Reps</TextWorkout>
            <InputWorkout placeholder='Number of Reps' 
                        name='reps' 
                        type= 'text'
                        value={add.reps}
                        onChange={handleChanges}/>
            <TextWorkout>Focus</TextWorkout>
            <InputWorkout placeholder='Muscle Group Targeted' 
                        name='muscle' 
                        type= 'text'
                        value={add.muscle}
                        onChange={handleChanges}/>
            </ContentWorkout>
            <ButtonWorkout type='submit' >Submit</ButtonWorkout>
        </FormWorkout>
    </MainWorkout>
    </div>
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

    export default connect( state => {
        return {
            workouts: state.workouts,
            isFetching: state.isFetching,
            error: state.workouts
        }
    }, {addWorkout}) (WorkoutForm);







// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addPost } from '../actions';


// const WorkoutForm = (props) => {
//     const [exercise, setExercise] = useState({
//         name: "",
//         reps: "",
//         muscle: ""
//     });

    
//     const handleSubmit = e => {
//         props.addPost(exercise)
//         e.preventDefault();
//         props.history.push('/dashboard')
//         console.log(` WORKOUT FORM `,exercise)
        
//     }

//     const handleChanges = e => {
//         let name = e.target.name;

//         setExercise({ ...exercise, [name]: e.target.value })
//     }

//     return(
//     <div>
//         <form >
//            <input placeholder='Name of Exercise' 
//                   name='name' 
//                   type= 'text'
//                   value={props.name} 
//                   onChange={handleChanges}/>
//            <input placeholder='Number of Reps' 
//                   name='reps' 
//                   type= 'text'
//                   value={props.reps}
//                   onChange={handleChanges}/>
//                   <input placeholder='Muscle Group Worked' 
//                   name='muscle' 
//                   type= 'text'
//                   value={props.muscle}
//                   onChange={handleChanges}/>
//             <button type='submit' onClick={handleSubmit}>Submit</button>
//         </form>
//     </div>

//     );
// };

// export default connect(null, { addPost })(WorkoutForm);