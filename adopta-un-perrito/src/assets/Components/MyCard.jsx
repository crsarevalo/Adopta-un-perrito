import "./MyCard.css";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ name, image, description, raza, color }) => {
  return (
    <>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description} </Card.Text>
          <div className="tag">
            <Tags txt={raza} colorBg={color} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
