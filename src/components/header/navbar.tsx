import React from "react";
import styled from "styled-components";
import { Routes, Route, Link, Outlet } from "react-router-dom"



type NavBarProps = {

};

const StyledNavBar = styled.nav`
    display: flex;
    flex-direction: row;
    margin-right: 150px;
`

const StyledList = styled.ul`
    list-style-type: none;
    display:flex;
    gap: 60px;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: 5px;
    transition: 0.3s;
    border-radius: 5px;
        
        &:hover {
        color: var(--color-primary);
        background-color: var(--color-black);
}        
`

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <StyledNavBar>
            <StyledList>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/venues">Venues</StyledLink>
                <StyledLink to="/bookings">Bookings</StyledLink>
                <StyledLink to="/login">Log in</StyledLink>
            </StyledList>
        </StyledNavBar>
    );
};

export default NavBar;