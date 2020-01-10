import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import WorkoutCard from "./WorkoutCard"
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { connect } from 'react-redux'
import { getWorkout } from "../actions/"
import {deleteWorkout} from "../actions/"

const Work = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 3rem;
   max-width: 73rem;
`;


const EachWork = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0.3rem solid #4169E1;
   width: 13rem;
   padding: 2%;
   margin: 1rem 0;
   
`;

const WorkoutList = (props) => {

   console.log('will it show?', props)

   const id = localStorage.getItem('id')

   useEffect(() => {
      props.getWorkout()

     
 

   }, [])

   const delWorkout = (id) => {
      props.deleteWorkout(id)
     // Processing()
  }
   return (
      <Work>
         {props.workouts.map(workout => {
            return (

               <EachWork>

                  <Link to = {`/EditWorkout/${workout.id}`}>
                  <WorkoutCard {...workout} {...props}/>
                  </Link>
                  <button onClick={()=>{delWorkout(workout.id)}}>Delete</button>

               </EachWork>
            )
         })}
      </Work>
   )
}

export default connect( state => {
   return {
       workouts: state.workouts,
       isFetching: state.isFetching,
       error: state.workouts
   }
}, {getWorkout, deleteWorkout}) (WorkoutList);


