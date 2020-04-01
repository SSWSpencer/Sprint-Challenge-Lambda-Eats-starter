import React from "react";
import {Route, Link} from "react-router-dom";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import styled from "styled-components";

const App = () => {

  const NavWrapper = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  `

  const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 3% auto;
  `

  return (
    <>
      <NavWrapper>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/pizza">
            <button id="pizzaNavButton">Pizza</button>
          </Link>
        </nav>
        </NavWrapper>

      <Route exact path ="/">
        <HomePage />
      </Route>
      
      <Route exact path ="/pizza">
        <FormWrapper>
        <Form />
        </FormWrapper>
      </Route> 
      

    </>
  );
};
export default App;
