import React, {Component} from 'react';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { withAuth } from '@okta/okta-react';

export default withAuth(class Navigation extends Component {
    state = { authenticated: null };

    checkAuthentication = async() => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async() => {
        this.props.auth.login('/');
    }

    logout = async() => {
        this.props.auth.logout('/');
    }

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
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/"><span
                            className="glyphicon glyphicon-home"></span> Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="about">About</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/contact" to="contact">Contact</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>logindemo</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/myprofile" to="myprofile"><span
                            className="glyphicon glyphicon-user"></span> Myprofile</NavItem>
                        {
                            this.state.authenticated ?(
                                <NavItem>
                                    <Button bsSize="xs" onClick={this.logout}><span
                                        className="glyphicon glyphicon-log-out"></span> logout</Button>
                                </NavItem>
                                ):(
                                <NavItem>
                                    <Button bsSize="xs" onClick={this.login}><span
                                        className="glyphicon glyphicon-log-in"></span> Login</Button>
                                </NavItem>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
})




