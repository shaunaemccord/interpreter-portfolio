


import { Card, ListGroup } from 'react-bootstrap';

const Cpc = () => {
  return (
    <Card  className="cpc" style={{ textAlign: "center", backgroundColor: "#BFC0C0" }}>
      <Card.Header style={{ color: "black", fontSize: "48px"  }}>Code of Professional Conduct</Card.Header>
      <Card.Body style={{ color: "black", textAlign: "left" }}>
        <Card.Text style={{ marginBottom: "40px" }}>
        The Code of Professional Conduct, CPC is a set of ethical principles for interpreters to adhere to. The CPC’s seven tenets serve as guiding principles for interpreters to follow to provide ethical and professional conduct. 

        </Card.Text >
        <p>Below each CPC tenet is a summary of my understanding and application. 
</p>
        <ListGroup>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 1. Interpreters adhere to standards of confidential communication.</strong>
            <br />
            This tenet requires interpreters to maintain the confidentiality of all information received during any time of the assignment.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 2. Interpreters possess the professional skills and knowledge required for the specific interpreting situation.</strong>
            <br />
            The interpreter accepting the assignment uses their discretion as to whether their interpreting skills are an appropriate match for the requested interpreting assignment. The interpreter must also conduct themselves in a professional manner.

          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 3. Interpreters conduct themselves in a manner appropriate to the specific interpreting situation.</strong>
            <br />
            Interpreters must avoid any conflicts of interest. They must also conduct themselves appropriately regarding appearance and refrain from the use of any mind-altering substances before or during rendering interpreting services.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 4. Interpreters demonstrate respect for consumers.</strong>
            <br />
            Interpreters show respect for consumers by honoring the consumer’s preferences for the assignment in relation to interpreting dynamics.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 5. Interpreters demonstrate respect for colleagues, interns, and students of the profession.</strong>
            <br />
            Respect for colleagues is demonstrated by interpreters through working cooperatively in collaboration with colleagues. Interpreters should maintain courtesy toward colleagues, interns, and student interpreters.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 6. Interpreters maintain ethical business practices.</strong>
            <br />
            This tenet requires that interpreters conduct their business in a professional and ethical manner regarding the accurate representation of their qualifications. Interpreters must also charge appropriate and reasonable fees for their interpreting services.
          </ListGroup.Item>
          <ListGroup.Item style={{ color: "black", marginBottom: "20px", backgroundColor: "#BFC0C0", border: "5px solid black", padding: "20px" }}>
            <strong>Tenet 7. Interpreters engage in professional development.</strong>
            <br />
            Professional development is expected and required for interpreters. Interpreters must maintain and improve their interpreting skills through continuing their professional development which may be accomplished by pursuing more formal education, attending conferences and workshops, and working with a mentor. Interpreters must be informed and stay up to date on laws that affect interpreting in their state.

          </ListGroup.Item>
        </ListGroup>
   
      </Card.Body>
    </Card>
  );
};

export default Cpc;
