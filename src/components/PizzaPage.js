import React from "react";
import styled from "styled-components";


const PizzaPage = (props) => {

    const PizzaWrapper = styled.div`
    margin: 0 auto;
    padding: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `
    const Pizza = styled.div`
    background: silver;
    padding: 2%;
    width: 20%;
    margin: 2% 1%;
    border-radius: 10px;
    border: 2px solid black;
    `

    const Name = styled.p`
    font-weight: bold;
    font-size: 20px;
    `
    const Size = styled.p`
    font-style: italic;
    `
    const Sauce = styled.p`
    font-style: italic;
    `
    const Toppings = styled.p`
    font-style: italic;
    `
    const SpecialInstructions = styled.p`
    font-style: italic;
    `


    return(
        <PizzaWrapper>
            {props.pizza.map(pizza=>(
                <Pizza>
                    <Name>Order Name: {pizza.name}</Name>
                    <Size>Size: {pizza.size}</Size>
                    <Sauce>Sauce: {pizza.sauce}</Sauce>
                    <Toppings>Toppings: {pizza.toppings}</Toppings>
                    <SpecialInstructions>Special Instructions: {pizza.specialInstructions}</SpecialInstructions>
                </Pizza>
            ))}
        </PizzaWrapper>
    )
}

export default PizzaPage;