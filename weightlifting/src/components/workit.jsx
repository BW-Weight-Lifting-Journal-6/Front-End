import React, {useState, useEffect} from 'react'

import desktopDashboardImage from '../images/dashboard.jpg';
import mobileDashboardImage from '../images/dashboard-mobile.jpg';
import styled from 'styled-components';


const MainBody = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Working = styled.h1`
    font-size: 10rem;
    color: orange;

`;



const Workit = ()=>{

    const imageUrl = useWindowWidth() >= 650 ? desktopDashboardImage : mobileDashboardImage;
    return(
        <MainBody style={{backgroundImage: `url(${imageUrl})` }}>
            <Working>Working out!.....</Working>
        </MainBody>
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
export default Workit;