import React from "react";
import { NavbarBrand, Navbar, Nav, NavLink } from "react-bootstrap";
import "./NavigationStyle.css";

const Navigation = () => {
  return (
    <>
      <Navbar className="custom-navbar"  variant="dark">
        <NavbarBrand className='brand'>Cookbook</NavbarBrand>
        <Nav className="custom-nav">
          <NavLink href="/recipeIndex">My Recipes</NavLink>
          <NavLink href="/recipeForm">Add Recipe</NavLink>
          <NavLink href='/'>Inspiration</NavLink>
        </Nav>

      </Navbar>
    </>
  );
};

export default Navigation;
