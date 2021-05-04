import {Navbar, Nav} from "react-bootstrap";

export const NavBar = props => {




    return (

    <Navbar className="bgg" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="bgg">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar>

    )

}