import {Navbar, Nav} from "react-bootstrap";
import ParLogo from "./images/ParLogo.png";


export const NavBar = props => {




    return (

    <Navbar className="bgg" variant="light">
    <Navbar.Brand href="#home"><img class="parLogo" src={ParLogo}></img></Navbar.Brand>
    <Nav className="bgg">
      <Nav.Link href="#home">Home</Nav.Link>
      
      <Nav.Link href="#features">Log out</Nav.Link>
    </Nav>
    </Navbar>

    )

}