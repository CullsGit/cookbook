import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";

const RecipeView = (props) => {
    const {recipe, serves, method, ingredients} = props.location.state.recipe;
    return (
      <Card style={{ width: '90%', margin: "auto" }}>
        <Card.Body>
          <Card.Title className='recipeTitle'>{recipe}</Card.Title>
          <Card.Text className='recipeText'>Serves: {serves}</Card.Text>
          <Card.Text className='recipeText'>Ingredients:<br/> {ingredients}</Card.Text>
          <Card.Text className='recipeText'>Method:<br/> {method}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  


export default RecipeView;
