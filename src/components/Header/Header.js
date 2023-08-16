// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';

// function OffcanvasExample() {
//     return (
//         <>
//             {['xl'].map((expand) => (
//                 <Navbar key={expand} expand={expand} className="bg-body-tertiary  mb-3">
//                     <Container >
//                         <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                         >
//                             <Offcanvas.Header closeButton>
//                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                     Offcanvas
//                                 </Offcanvas.Title>
//                             </Offcanvas.Header>
//                             <Offcanvas.Body>
//                                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                                     <Nav.Link ><Link to="/">Home</Link>   </Nav.Link>
//                                     <Nav.Link ><Link to="/movies">Movies</Link> </Nav.Link>
//                                     <Nav.Link ><Link to="">TV</Link> </Nav.Link>
//                                     <Nav.Link ><Link to="">Search</Link> </Nav.Link>

//                                 </Nav>
//                                 <Form className="d-flex">
//                                     <Form.Control
//                                         type="search"
//                                         placeholder="Search"
//                                         className="me-2"
//                                         aria-label="Search"
//                                     />
//                                     <Button variant="outline-success">Search</Button>
//                                 </Form>
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     );
// }

// export default OffcanvasExample;