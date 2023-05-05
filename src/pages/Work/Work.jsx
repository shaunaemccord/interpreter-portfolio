import videos from "./Livework";

import { Card, Button, Container, Row, Col } from "react-bootstrap";



const ImageCard = ({ image, name, description, video, stuff, link, pdfUrl }) => {
  return (
    <Card style={{ width: "40rem", border: "5px solid black" }} >
      <a href={link} target="_blank">
        <Card.Img className="zoom" variant="top" src={image} />
      </a>
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{name}</Card.Title>
        <Card.Text className="cardText">{description}</Card.Text>
      </Card.Body>
      {link && (
        <Button href={link} target="_blank" variant="secondary">
          Live Demo
        </Button>
      )}
      {pdfUrl && (
        <Button href={pdfUrl} download="download.pdf" variant="primary">
          Download PDF
        </Button>
      )}
      <p className="reflect">{stuff}</p>
    </Card>
  );
};

const Projects = () => {
    return (
      <div className="cards">
        <div className="text-black py-4 samples" >
          <Container>
            <Row className="justify-content-center">
              <h1 className="text-center " >Samples of my work!</h1>
            </Row>
          </Container>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Container>
            <Row className="justify-content-center">
              {videos.map((image, index) => (
                <Col md={5} className="mb-3 mx-auto image-card" key={index}>
                  <ImageCard {...image} />
                  
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  
  export default Projects;

