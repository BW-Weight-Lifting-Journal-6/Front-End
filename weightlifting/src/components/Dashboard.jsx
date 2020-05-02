import React, {useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import styled from "styled-components";

import desktopDashboardImage from '../images/dashboard.jpg';
import mobileDashboardImage from '../images/dashboard-mobile.jpg';
import WorkoutList from './WorkoutList';

const MainDashboard = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`



const ButtonLink = styled.button`

    background-color: yellow;
    border-radius: 6px;
    font-size: 1.7rem;
    color:black;

`;




const Dashboard = () => {

    const imageUrl = useWindowWidth() >= 650 ? desktopDashboardImage : mobileDashboardImage;

        return(
            <div>
                 <ButtonLink> 
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/addworkoutform"> New Workout </Link>
                </ButtonLink>
            <MainDashboard className="dashboard" style={{backgroundImage: `url(${imageUrl})` }}>
      <WorkoutList/>      

            </MainDashboard>
            </div>
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