import React, {Component} from 'react';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render(){
        return(
            //use react-bootstrap Navbar with collapse
            <Navbar  inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">findgroup</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {/*use componentClass and href to fix the style error from combining bootstrap and router*/}
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="about">About</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/contact" to="contact">Contact</NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;


