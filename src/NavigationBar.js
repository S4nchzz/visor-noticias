import { Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import App from "./App";

export default function NavigationBar() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    Noticias - Iyan Sanchez da Costa
                </Navbar.Brand>
                <NavDropdown title={"Home"}>
                    <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
};
