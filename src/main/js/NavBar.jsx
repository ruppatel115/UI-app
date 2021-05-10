import {Navbar, Nav} from "react-bootstrap";

export const NavBar = props => {




    return (

    <Navbar className="bgg" variant="light">
    <Navbar.Brand href="#home">PAR SYSTEM</Navbar.Brand>
    <Nav className="bgg">
      <Nav.Link href="#home">Home</Nav.Link>
      
      <Nav.Link href="#features">Log out</Nav.Link>
    </Nav>
    </Navbar>

    )

}