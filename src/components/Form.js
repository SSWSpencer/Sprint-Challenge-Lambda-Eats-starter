import React, { useState, useEffect } from "react";
import {Route, Link} from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import PizzaPage from "./PizzaPage";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field").min(2),
    size: yup.string().required("Size is a required field"),
    sauce: yup.string(),
    specialInstructions: yup.string(),
})

const pizza = [];

const Form = () => {


    const [formState, setFormState] = useState({
        name: "",
        sauce: "",
        toppings: [],
        specialInstructions: "",
      });

      const [errors, setErrors] = useState({
        name: "",
        sauce: "",
        toppings: [],
        specialInstructions: "",
      });

      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

      useEffect(() => {
          formSchema.isValid(formState).then(valid => {
              setButtonDisabled(!valid);
          })
      }, [formState])

      const validateChange = event => {
        yup
          .reach(formSchema, event.target.name)
          .validate(event.target.value)
          .then(valid => {
            setErrors({
              ...errors, [event.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors, [event.target.name]: err.errors[0]
            });
          });
      };
      const formSubmit = event => {
        event.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            pizza.push(formState);
            console.log("success", post, pizza);
    
            setFormState({
                name: "",
                sauce: "",
                toppings: [],
                specialInstructions: "",
            });
          })
          .catch(err => {
            console.log(err.res);
          });
      };


      const inputChange = event =>{
          event.persist();
          const newData = {
              ...formState, [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
          validateChange(event);
          setFormState(newData);
      }

      const ErrorMsg = styled.p`
      color: red;
      font-size: 10px;
      `
      let topping1 = false;
      let topping2 = false;
      let topping3 = false;
      let topping4 = false;
      let topping5 = false;
      let topping6 = false;
      let topping7 = false;
      let topping8 = false;
      let topping9 = false;
      let topping10 = false;
      let topping11 = false;
      let topping12 = false;
      let topping13 = false;
      let topping14 = false;

      function hidePage() {
        var x = document.getElementById("pizzaForm");
        x.style.display= "none";
      }


    return (
        <div>
            <div id="pizzaForm">
            <form onSubmit={formSubmit}>
            <div>
                    <label htmlFor="name">
                        <input 
                        placeholder="Name"
                        id="name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={inputChange}
                        />
                        {errors.name.length > 0 ? <ErrorMsg className="error">{errors.name}</ErrorMsg> : null}
                    </label>
                </div>

                <div>
                    <label htmlFor="size">
                        <select id="size" name="size" onChange={inputChange}>
                            <option value="" disabled selected>Select your Size</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
                        </select>
                    </label>
                </div>

                <div>
                    <input type="radio" id="original red" name="sauce" value="Original Red" onChange={inputChange}></input>
                    <label for="Original Red">Original Red</label><br/>
                    <input type="radio" id="Garlic Ranch" name="sauce" value="Garlic Ranch" onChange={inputChange}></input>
                    <label for="Garlic Ranch">Garlic Ranch</label><br/>
                    <input type="radio" id="BBQ Sauce" name="sauce" value="BBQ Sauce" onChange={inputChange}></input>
                    <label for="BBQ Sauce">BBQ Sauce</label><br/>
                    <input type="radio" id="Spinach Alfredo" name="sauce" value="Spinach Alfredo" onChange={inputChange}></input>
                    <label for="Spinach Alfredo">Spinach Alfredo</label>
                </div>

                <div>
                    <input type="checkbox" id="topping1" name="Pepperoni" value="Pepperoni" onChange={event => {
                        topping1 = !topping1;
                        if(topping1){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping1){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping1">Pepperoni</label>
                    <input type="checkbox" id="topping2" name="Sausage" value="Sausage" onChange={event => {
                        topping2 = !topping2;
                        if(topping2){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping2){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping2">Sausage</label><br/>
                    <input type="checkbox" id="topping3" name="Canadian Bacon" value="Canadian Bacon"onChange={event => {
                        topping3 = !topping3;
                        if(topping3){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping3){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping3">Canadian Bacon</label>
                    <input type="checkbox" id="topping4" name="Spicy Italian Sausage" value="Spicy Italian Sausage" onChange={event => {
                        topping4 = !topping4;
                        if(topping4){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping4){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping4">Spicy Italian Sausage</label><br/>
                    <input type="checkbox" id="topping5" name="Grilled Chicken" value="Grilled Chicken" onChange={event => {
                        topping5 = !topping5;
                        if(topping5){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping5){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping5">Grilled Chicken</label>
                    <input type="checkbox" id="topping6" name="Onions" value="Onions" onChange={event => {
                        topping6 = !topping6;
                        if(topping6){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping6){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping6">Onions</label><br/>
                    <input type="checkbox" id="topping7" name="Green Pepper" value="Green Pepper" onChange={event => {
                        topping7 = !topping7;
                        if(topping7){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping7){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping7">Green Pepper</label>
                    <input type="checkbox" id="topping8" name="Diced Tomatos" value="Diced Tomatos" onChange={event => {
                        topping8 = !topping8;
                        if(topping8){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping8){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping8">Diced Tomatos</label><br/>
                    <input type="checkbox" id="topping9" name="Black Olives" value="Black Olives" onChange={event => {
                        topping9 = !topping9;
                        if(topping9){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping9){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping9">Black Olives</label>
                    <input type="checkbox" id="topping10" name="Roasted Garlic" value="Roasted Garlic" onChange={event => {
                        topping10 = !topping10;
                        if(topping10){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping10){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping10">Roasted Garlic</label><br/>
                    <input type="checkbox" id="topping11" name="Artichoke Hearts" value="Artichoke Hearts" onChange={event => {
                        topping11 = !topping11;
                        if(topping11){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping11){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping11">Artichoke Hearts</label>
                    <input type="checkbox" id="topping12" name="Three Cheese" value="Three Cheese" onChange={event => {
                        topping12 = !topping12;
                        if(topping12){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping12){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping12">Three Cheese</label><br/>
                    <input type="checkbox" id="topping13" name="Pineapple" value="Pineapple" onChange={event => {
                        topping13 = !topping13;
                        if(topping13){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping13){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping13">Pineapple</label>
                    <input type="checkbox" id="topping14" name="Extra Cheese" value="Extra Cheese" onChange={event => {
                        topping14 = !topping14;
                        if(topping14){
                            formState.toppings.push(event.target.name);
                            console.log(formState.toppings);
                        }
                        if(!topping14){
                            for(let i = 0; i < formState.toppings.length; i++){
                                if(formState.toppings[i] === event.target.name){
                                    formState.toppings.splice(i, 1);
                                }
                            }
                        }
                    }}></input>
                    <label for="topping14">Extra Cheese</label><br/>
                </div>



                <div>
                    <label htmlFor="Special Instructions">
                        <input 
                        placeholder="Special Instructions"
                        id="SpecialInstructions"
                        type="text"
                        name="specialInstructions"
                        value={formState.specialInstructions}
                        onChange={inputChange}
                        />
                    </label>
                </div>
                <br />

                <button id="submitButton" disabled={buttonDisabled} onClick={hidePage}>Submit Order</button>

            </form>
            </div>
            <PizzaPage pizza={pizza} />
        </div>
      );
}

export default Form;