import "./App.css";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import RecipeForm from "./components/RecipeForm";
import RecipeIndex from "./components/RecipeIndex";
import RecipeView from "./components/RecipeView";
import Inspiration from "./components/API/Inspiration";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "recipes";
  const [recipes, setRecipes] = useState([]);

  const addRecipeHandler = (recipe) => {
    console.log(recipe);
    setRecipes([...recipes, { id: uuid(), ...recipe }]);
  };

  const removeRecipeHandler = (id) => {
    const newRecipeList = recipes.filter((recipe) => {
      return recipe.id !== id;
    });

    setRecipes(newRecipeList);
  };

  useEffect(() => {
    const retrieveRecipes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveRecipes) setRecipes(retrieveRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  return (
    <Router>
      <div className="App">
        <Container>
          <Navigation />
          <Switch>
            <Route
              path="/recipeIndex"
              exact
              render={(props) => (
                <RecipeIndex
                  {...props}
                  recipes={recipes}
                  getRecipeId={removeRecipeHandler}
                />
              )}
            />
            <Route
              path="/recipeForm"
              exact
              render={(props) => (
                <RecipeForm {...props} addRecipeHandler={addRecipeHandler} />
              )}
            />
            <Route path='/' exact component={Inspiration} />
            <Route path="/recipeView/:id" component={RecipeView} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
