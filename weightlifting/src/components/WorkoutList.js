import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import WorkoutCard from "./WorkoutCard"





const WorkoutList = (props) => {
   const [workouts, setworkouts] = useState([])
   

   useEffect(() => {
      const id = localStorage.getItem('id')
      axiosWithAuth()
         .get(`api/workout/`)
         .then(res => {
            console.log(res)
            setworkouts(res.data)
         })
   }, [])
   return (
      <div>
         {workouts.map(workout => {
            return (
               <div key={workout.id}>
                  <WorkoutCard {...workout} {...props} />
               </div>
            )
         })}
      </div>
   )
}

export default WorkoutList

