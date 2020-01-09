import React, { useState } from 'react';




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
        console.log(` WORKOUT FORM `,user)
        
    }

    const handleChanges = e => {
        let name = e.target.name;

        setUser({ ...user, [name]: e.target.value })
    }

    return(
    <div>
        <form >
           <input placeholder='Name of Exercise' 
                  name='name' 
                  type= 'text'
                  value={props.name} 
                  onChange={handleChanges}/>
           <input placeholder='Date' 
                  name='date' 
                  type= 'text'
                  value={props.date}
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

export default WorkoutForm;
