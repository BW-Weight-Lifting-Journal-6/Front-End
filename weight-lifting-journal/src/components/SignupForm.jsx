import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";



const Main = styled.div`
height: 89vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`

const Form2 = styled(Form)`
border: 1px solid black;
background-color: #ffffff;
padding: 20px;
`;

const Input = styled(Field)`
margin: 3%;
`
const Title = styled.h3`
text-align: center;
margin: 10%;
`
const Text = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`

const Input2 = styled(Field)`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
`

const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Button = styled.button`
background-color: #4169E1;
color: #fff;
width: 100%;
text-align: center;
padding: 5%;
margin-top: 30%;
`


const SignupForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(users => [...users, status]);
    }, [status]);


    return (

        <Main className="user-form">
            <Form2 >
                <Title>Wanna Register?</Title>
                <Text>
                <Input2 type="text" name="username" placeholder="Create a Username" />
                {touched.username && errors.username && (
                    <p className="errors"> {errors.username}</p>
                )}
                <Input2 type="password" name="password" placeholder="Create a Password " />
                {touched.password && errors.password && (
                    <p className="errors"> {errors.password}</p>
                )}
                
                <Buttonc>
                    <Button >Sign Up</Button>
                </Buttonc>
                </Text>
            </Form2>

        </Main>
    );
};


const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}) {
        return {
            username: username || "",
            password: password || ""  

        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()

    }),
    handleSubmit(values, { setStatus, props }) {
        axios
            .post("https://authbackend121.herokuapp.com/api/auth/register", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
                props.history.push("/login")

            })
            .catch(err => console.log(err.response));
    }


})(SignupForm);

export default FormikUserForm;

