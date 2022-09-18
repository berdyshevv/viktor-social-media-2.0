import "./App.css";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function App() {
  const [index, setIndex] = useState(0);

  const onButtonClickNext = () => {
    setIndex((index) => index + 1);
  };

  return (
    <div className="App">
      <Card style={{ width: "51rem" }}>
        <Card.Img
          variant="top"
          src="holder.js/100px180"
          style={{ height: "25rem" }}
        />
        <Card.Body>
          <Card.Title>{index}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-secondary" onClick={onButtonClickNext}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
