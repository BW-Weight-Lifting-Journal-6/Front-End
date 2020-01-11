import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import WorkoutCard from "./WorkoutCard";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { connect } from 'react-redux';
import { getWorkout } from "../actions/";
import {deleteWorkout} from "../actions/";

const Work = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   max-width: 73rem10
`;

const EachWorkout = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 0.3rem solid #C0C0C0;
   background-color: white;
   width: 13rem;
   padding: 2%;
   margin: 1rem 0; 
`;

const CrudButton = styled.button`
background-color: #17A2B8;
border-radius: 8px;
width: 100px;
height: 1.5rem;
color: white;
`

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

               <EachWorkout>
                  <WorkoutCard {...workout} {...props}/>
                  <Link to={`/EditWorkout/${workout.id}`}>
                  <CrudButton>Edit</CrudButton>
                  </Link>
                  <CrudButton onClick={()=>{delWorkout(workout.id)}}>Delete</CrudButton>
               </EachWorkout>
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


