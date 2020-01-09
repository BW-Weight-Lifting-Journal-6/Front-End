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
    <div>
        <form >
           <input placeholder='Name of Exercise' 
                  name='name' 
                  type= 'text'
                  value={props.name} 
                  onChange={handleChanges}/>
           <input placeholder='Number of Reps' 
                  name='reps' 
                  type= 'text'
                  value={props.reps}
                  onChange={handleChanges}/>
                  <input placeholder='Muscle Group Worked' 
                  name='muscle' 
                  type= 'text'
                  value={props.muscle}
                  onChange={handleChanges}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>

    );
};

export default connect(null, { addPost })(WorkoutForm);
