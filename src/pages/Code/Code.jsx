


import { Card, ListGroup } from 'react-bootstrap';

const Cpc = () => {
  return (
    <Card  className="cpc" style={{ textAlign: "center", backgroundColor: "#BFC0C0" }}>
      <Card.Header style={{ color: "black", fontSize: "24px"  }}>Code of Professional Conduct</Card.Header>
      <Card.Body style={{ color: "black", textAlign: "left" }}>
        <Card.Text style={{ marginBottom: "40px" }}>
          The CPC, or Code of Professional Conduct, is a set of ethical principles and guidelines that interpreters should follow to ensure they provide quality and impartial interpretation services. The code is organized into seven tenets, each of which serves as a guiding principle for interpreters:
        </Card.Text >
        <ListGroup>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 1: Accuracy and Completeness</strong>
            <br />
            This tenet requires interpreters to ensure that they provide a complete and accurate interpretation of the message, without adding, omitting, or changing any information.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 2: Confidentiality</strong>
            <br />
            Interpreters are required to maintain the confidentiality of all information that they come across while performing their duties. This means that they should not share any personal or sensitive information with third parties without proper authorization.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 3: Impartiality and Avoidance of Conflict of Interest</strong>
            <br />
            This tenet requires interpreters to remain neutral and impartial during the interpretation process. They should avoid any personal biases or conflicts of interest that could interfere with their ability to provide an accurate interpretation.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 4: Professionalism</strong>
            <br />
            Interpreters should conduct themselves in a professional manner at all times, by adhering to the highest standards of ethical behavior, and by maintaining a positive and respectful attitude towards all parties involved in the interpretation.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 5: Respect for Consumers</strong>
            <br />
            This tenet requires interpreters to respect the autonomy and diversity of the consumers they serve. They should communicate in a way that is appropriate for the consumers' culture, language, and communication needs.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 6: Role Boundaries</strong>
            <br />
            Interpreters should adhere to their professional role and responsibilities, and not exceed the scope of their expertise or offer advice, opinions, or personal beliefs during the interpretation.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 7: Professional Development</strong>
            <br />
            This tenet requires interpreters to engage in ongoing professional development to enhance their skills and knowledge in the field, and to stay up-to-date with the latest trends and best practices. This includes attending relevant trainings and workshops, networking with colleagues, and participating in professional organizations.
          </ListGroup.Item>
        </ListGroup>
        <Card.Text>
          In summary, the CPC provides a set of ethical standards for interpreters to follow in order to ensure that they provide quality interpretation services that are impartial, confidential, and respectful of consumers' needs and diversity.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cpc;
