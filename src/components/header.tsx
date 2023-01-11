import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

const Header: React.FC = () => {
    return (
        <div>
            <Navbar className="d-print-none" expand="md">
                <NavbarBrand tag={Link} to="/">
                    baraq: Flashcards for Biblical Hebrew
                </NavbarBrand>
            </Navbar>
        </div>
    );
};

export default Header;
