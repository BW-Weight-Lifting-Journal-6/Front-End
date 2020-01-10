import React from 'react';
import WorkoutCard from "./WorkoutCard"

import styled from "styled-components";
import { connect } from 'react-redux'
import { getWorkout } from "../actions/"

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

const WorkoutList = ({workouts, history}) => {
   
   return (
      <Work>
         {workouts.map(workout => {
            return (

               <EachWork key={workout.id}>
                  <WorkoutCard key={workout.id} history={history} workout={workout}/>
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
}, {getWorkout}) (WorkoutList);

