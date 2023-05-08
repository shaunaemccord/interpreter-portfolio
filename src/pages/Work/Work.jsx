import videos from "./Livework";

import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react"



const ImageCard = ({ image, name, description, stuff2, stuff, link, pdfUrl, stuff3,stuff4, stuff5, h2, h3, h4 }) => {
  const [showText, setShowText] = useState(false);

  return (
    <Card style={{ maxWidth: "100%", border: "5px solid black" }} >
      <a href={link} target="_blank">
        <Card.Img className="zoom" variant="top" src={image} />
      </a>
      <Card.Body className="cardBody text-center">
        <Card.Title className="cardTitle">{name}</Card.Title>
        <Card.Text className="cardText">{description}</Card.Text>
      
      {link && (
        <Button className="custom-button"  href={link} target="_blank" variant="primary">
          Click to see my work!
        </Button>
      )}
      {pdfUrl && (
        <Button className="custom-button"  href={pdfUrl} download="download.pdf" variant="primary">
          Download PDF
        </Button>
      )}
      <Button className="custom-button"  variant="primary" onClick={() => setShowText(!showText)}>
        {showText ? 'Hide Reflections' : 'Click to read Reflections'}
      </Button>
      {showText && (
        <>
          {h2 && <h2 style={{fontSize: '20px'}}>{h2}</h2>}
          {stuff && <p className="reflect" style={{padding: "20px"}}>{stuff}</p>}
          {stuff2 && <p className="reflect" style={{padding: "20px"}}>{stuff2}</p>}
          {stuff3 && <p className="reflect" style={{padding: "20px"}}>{stuff3}</p>}
          {h3 && <h3 style={{fontSize: '20px'}}>{h3}</h3>}
          {stuff4 && <p className="reflect" style={{padding: "20px"}}>{stuff4}</p>}
          {h4 && <h4 style={{fontSize: '20px'}}>{h4}</h4>}
          {stuff5 && <p className="reflect" style={{padding: "20px"}}>{stuff5}</p>}
        </>
      )}
      </Card.Body>
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

