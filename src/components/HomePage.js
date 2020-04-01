import React from "react";
import PizzaLogo from "../Images/HPMainPizza.jpg"
import styled from "styled-components";

const HomePage = () =>{

    const MainPage = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: center;
    `
    const SmallImg = styled.img`
    width: 60%;
    `

    return(
        <MainPage>
            <h2>"It's Pizza Time!</h2>
            <p>Welcome to Lambda Eats, your one-stop shop for everything pizza.</p>
            <p>Do you like pizza? Well you've come to the right place!</p>
            <p>Do you not-like pizza? Well, come back later because that's all we have!</p>
            <SmallImg src={PizzaLogo} />
        </MainPage>
    )

}

export default HomePage;