import React, { useEffect }from "react";
import styled from "styled-components";

const Card = styled.div`
border: 2px solid #C0C0C0;
min-width: 13rem;
`

const CardTop = styled.h3`
    background-color: #C0C0C0;
    margin: 0;
    padding: 5% 0;
`

const CardBody = styled.div`
    margin: 0 auto;
    background-color: white;
    color: black;
    font-size: 1rem;
`;

const WorkoutCardComp = (props) => {
    console.log(props);

    return(
    <Card className ="workout-card">
        <CardTop>
            {props.exercise}
        </CardTop>
        <CardBody>
            <p> Reps: {props.reps}</p>
            <p> Muscle: {props.muscle}</p>
        </CardBody>
    </Card>
    );
}

// `https://weight-lifting-api.herokuapp.com/api/workout/${id}`


export default WorkoutCardComp;