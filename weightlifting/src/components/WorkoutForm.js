import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';


const WorkoutForm = (props) => {
    const [exercise, setExercise] = useState({
        name: "",
        reps: "",
        muscle: ""
    });

    
    const handleSubmit = e => {
        props.addPost(exercise)
        e.preventDefault();
        props.history.push('/dashboard')
        console.log(` WORKOUT FORM `,exercise)
        
    }

    const handleChanges = e => {
        let name = e.target.name;

        setExercise({ ...exercise, [name]: e.target.value })
    }



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

export default connect(null, { addPost })(WorkoutForm);
