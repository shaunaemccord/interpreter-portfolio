import React from "react";
import { Navbar, Container} from "react-bootstrap"

import backroundImg from "/images/header-backround.jpg"

// const Header = () => {
//     return (
//       <Navbar className="justify-content-center header" style={{ height: '33vh' }}>
//         <Container  className="py-5">
//           <Navbar.Brand>
//             <h1>Shauna McCord's Interpreting Portfolio</h1>
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     );
//   };
  
//   export default Header;

const Header = () => {
  return (
    <Navbar 
      className="header d-flex" 
      style={{ 
        height: '33vh',
        backgroundImage: `url(${backroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className="py-5">
        <Navbar.Brand className="mr-auto">
          <h1 className="headerText" style={{color: "white",}}>Shauna McCord's Interpreting Portfolio</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;