import React, { useEffect, useState } from "react";
import RecipeCard from './RecipeCard';
import './InspirationStyle.css';
import {
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { uuid } from "uuidv4";

const Inspiration = () => {
  const APP_ID = "b0bb70b1";
  const APP_KEY = "e08ebce3aa48d4cd5bb39c904c1067e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Roasted Vegetables');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits); 
  }

  const handleChange = e => {
      setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
      <>
    <Form onSubmit={getSearch}>
      <Form.Label className="formLabel">
        Search anything food-related for recipe inspiration!
      </Form.Label>
      <InputGroup>
        <Form.Control type="text" name="search" placeholder='Roasted Vegetables' value={search} onChange={handleChange}/>
        <InputGroup.Append>
          <Button variant="outline-light">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
    {recipes.map(recipe => (
        <RecipeCard
        key ={ uuid() }
        image={recipe.recipe.image}
        dish={recipe.recipe.label}
        serves={recipe.recipe.yield}
        url = {recipe.recipe.url}
        />
    ))}
    </>
  );
};

export default Inspiration;
