import { Container, Row, Col, Image } from "react-bootstrap";
import image from "./images/shauna.png";
import logo from "./images/logo-shauna.png"
import myGIF from "./images/asl.gif";
const Home = () => {
  return (
  <div className="d-flex justify-content-center">
  <Image src={image} alt="of shauna" className="img-fluid me" style={{width: "20%", height: "20%", borderRadius: "15px", margin: "50px", border: "5px solid black"}} />
  <Container className="welcome">
    <Row>
      <Col>
        <div className="my-5 home">
          <h1 className="text-center">Welcome!</h1>
          <p className="lead bio">
          Welcome to Shauna McCord’s Interpreting Portfolio. As a soon-to-be graduate of Northern Essex Community College’s Interpreting Certificate Program and Child of Deaf Adults (CODA), I am passionate about facilitating accurate and effective communication between Deaf, Hard of Hearing, and hearing individuals. Please feel free to explore my portfolio and contact me for more information. 

          </p>
          <p>Northern Essex Community College, Haverhill, Massachusetts Class of 2023</p>
          <p>Email me at : <a href="shaunaemccord@gmail.com">Shaunaemccord@gmail.com</a></p>
          <Image
            src={logo}
            alt="shauna mccord"
            className="img-fluid zoom mt-3"
            style={{width: "20%", height: "10%", paddingS: "20px"}}
          />
          <Image
            src={myGIF}
            alt="shauna mccord"
            className="img-fluid zoom mt-3"
            style={{width: "20%"}}
          />
        </div>
      </Col>
    </Row>
  </Container>
</div>
  );
};

export default Home;