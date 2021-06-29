import React from "react";
import { useForm } from "react-hook-form";
import "./RecipeFormStyle.css";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";


const RecipeForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.addRecipeHandler(data);
    props.history.push("/");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Recipe</FormLabel>

          <FormControl
            type="text"
            name="recipe"
            {...register("recipe", { required: "This is required" })}
          />
          {errors.recipe && (
            <p style={{ color: "red" }}>{errors.recipe.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Description</FormLabel>

          <FormControl
            type="text"
            name="description"
            {...register("description", { required: "Requires a short description of the dish" })}
          />
          {errors.recipe && (
            <p style={{ color: "red" }}>{errors.recipe.message}</p>
          )}
        </FormGroup>

        <FormGroup>
          <FormLabel>Serves</FormLabel>

          <FormControl
            as="select"
            name="serves"
            {...register("serves", { required: true })}
          >
            <option>1</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>8+</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="exampleForm.ControlTextarea1">
          <FormLabel>Ingredients</FormLabel>
          <FormControl
            as="textarea"
            rows={2}
            name="ingredients"
            {...register("ingredients", { required: true })}
          />
        </FormGroup>

        <FormGroup controlId="exampleForm.ControlTextarea1">
          <FormLabel>Method</FormLabel>
          <FormControl
            as="textarea"
            rows={5}
            name="method"
            {...register("method", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Add image URL from internet (optional)</FormLabel>
          <FormControl type="text" name="image" {...register("image")} />
        </FormGroup>
        <Button className='formBtn' variant="primary" type="submit" size="lg" block>
          Add Recipe
        </Button>
      </Form>
    </>
  );
};

export default RecipeForm;
