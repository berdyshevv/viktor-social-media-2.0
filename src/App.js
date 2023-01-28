import "./App.css";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { cards } from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const currentCard = cards[index];
  const { author, img, description, like } = currentCard;
  const onButtonClickNext = () => {
    setIndex((index) => {
      if(index === cards.length - 1){
        return 0;
      } else {
        return index + 1;
      } 
    });
   
  };
  const onButtonClickPrev = () => {
    setIndex((index) => {
      if (index  === 0){
        return cards.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  return (
    <div className="container">
      <Card style={{ width: "51rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "25rem" }} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>
            {description}
            {like ? "   O" : "   X"}
          </Card.Text>
          <Button variant="outline-primary" onClick={onButtonClickPrev}>
            PREV
          </Button>
          <Button variant="outline-secondary" onClick={onButtonClickNext}>
            NEXT
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
