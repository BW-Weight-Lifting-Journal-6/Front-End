import React, {useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';
import styled from "styled-components";

import desktopDashboardImage from '../images/dashboard.jpg';
import mobileDashboardImage from '../images/dashboard-mobile.jpg';

const MainDashboard = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const FormDashboard = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 3px solid #17A2B8;
background-color: #ffffff;
max-width: 60%;
min-width: 250px;
`

const DashboardNav = styled.div`
dislplay: flex;
flex-direction: row;
justify-content: space-between;
max-width: 100%;
background-color: lightgray;
padding: 20px;
`

const Dashboard = () => {

    const imageUrl = useWindowWidth() >= 650 ? desktopDashboardImage : mobileDashboardImage;

        return(
            <MainDashboard className="dashboard" style={{backgroundImage: `url(${imageUrl})` }}>
                <FormDashboard>
                    <DashboardNav> 
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to=""> My Profile </NavLink>
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="/workoutform"> Add a New Workout </NavLink>
                    <NavLink style={{textDecoration: 'none', color: '#ff914d'}} to="" > My Workouts </NavLink>
                    </DashboardNav>
                    
                    <h1>put user data here!</h1>
                
                </FormDashboard>
            </MainDashboard>
        )
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

export default Dashboard