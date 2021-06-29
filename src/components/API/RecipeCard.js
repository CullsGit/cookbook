import React from "react";
import { Card} from "react-bootstrap";

const RecipeCard = ({image, dish, serves, url}) => {
  return (
    <div className='recipeCards'>
      <Card className="cardInspo">
          <a href={url}>
          <Card.Img
            variant="top"
            src={image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=";
            }}
          />
          </a>
        <Card.Body>
          <Card.Title>{dish}</Card.Title>
          <small style={{ fontSize: "13px" }}>Serves: {serves}</small>
          <Card.Text>{}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
