// import React from 'react';
// import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
// import './navbar.css';

// const Navbar = () => {
//   return (
//     <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <BootstrapNavbar.Brand href="#name">AMAYA M</BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto me-3">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#skill">Skills</Nav.Link>
//             <Nav.Link href="#education">Education</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   );
// };

// export default Navbar;
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import './navbar.css';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand">
          AMAYA M
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#publication">Publication</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#certifications">Certificates</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;