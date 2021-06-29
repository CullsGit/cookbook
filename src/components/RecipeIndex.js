import React from "react";
import { Card, Button, CardDeck, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecipeIndexStyle.css";

const RecipeIndex = (props) => {
  const deleteRecipeHandler = (id) => {
    props.getRecipeId(id);
  };
  const renderRecipeList = props.recipes.map((recipe) => {
    return (
      <Card className='card'  key={recipe.id}>
        <Link
          to={{
            pathname: `/recipeView/${recipe.id}`,
            state: { recipe: recipe },
          }}
        >
          <Card.Img
            variant="top"
            src={recipe.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=";
            }}
          />
          </Link>
          <Card.Body className='card-body'>
            <Card.Title>{recipe.recipe}</Card.Title>
            
            <small style={{ fontSize: "13px" }}>Serves: {recipe.serves}</small>
            <Card.Text>{recipe.description}</Card.Text>
          </Card.Body>
        
        <Card.Footer>
          <Button
            variant="danger"
            onClick={() => deleteRecipeHandler(recipe.id)}
          >
            Delete Recipe
          </Button>
        </Card.Footer>
      </Card>
    );
  });
  return (
    <>

      <CardColumns style={{ display: "flex", flexDirection: "row" }}>
        {renderRecipeList}
      </CardColumns>
    
    </>
  );
};

export default RecipeIndex;
