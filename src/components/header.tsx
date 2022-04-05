import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component<{}, {}> {
    render() {
        return (
            <div>
                <Navbar className="d-print-none" color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">
                        baraq: Flashcards for Biblical Hebrew
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;
