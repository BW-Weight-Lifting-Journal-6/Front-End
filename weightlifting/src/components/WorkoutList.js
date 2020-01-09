import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { NavLink } from "react-router-dom";

import WorkoutCard from "./WorkoutCard";

import styled from "styled-components";

import desktopAddWorkoutListImage from '../images/addworkout.jpg';
import mobileAddWorkoutListImage from '../images/addworkout-mobile.jpg';

const MainWorkoutList = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 10%;
`

const NavDashboard = styled.div`
dislplay: flex;
flex-direction: row;
justify-content: space-between;
max-width: 100%;
background-color: lightgray;
padding: 20px;
`

const FormWorkoutList = styled.form`
display: flex;
flex-direction: column;
border: 3px solid #17A2B8;
background-color: #ffffff;
padding: 20px 40px 40px 40px;
max-width: 60%;
min-width: 200px;
`

const WorkoutList = (props) => {
   const [workouts, setworkouts] = useState([])
   

   useEffect(() => {
      const id = localStorage.getItem('id')
      axiosWithAuth()
         .get(`https://authbackend121.herokuapp.com/api/auth/workouts/user/${id}`)
         .then(res => {
            console.log(res)
            setworkouts(res.data)
         })
   }, [])

   const imageUrl = useWindowWidth() >= 650 ? desktopAddWorkoutListImage : mobileAddWorkoutListImage;

   return (
      <MainWorkoutList className="workout-list" style={{backgroundImage: `url(${imageUrl})` }}>
         <FormWorkoutList>
            <NavDashboard> 
                  <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/dashboard"> My Profile </NavLink>
                  <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/addworkoutform"> Add a New Workout </NavLink>
                  <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/myworkouts" > My Workouts </NavLink>
            </NavDashboard>
            
         
         {workouts.map(workout => {
            return (
               <div key={workout.id}>
                  <WorkoutCard {...workout} {...props} />
               </div>
            )
         })}
         </FormWorkoutList>
      </MainWorkoutList>
   )
}

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

export default WorkoutList

