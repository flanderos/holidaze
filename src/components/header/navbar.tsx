import React from "react";
import styled from "styled-components";
import { Routes, Route, Link, Outlet } from "react-router-dom"



type NavBarProps = {
    title: string;
    subtitle?: string;
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
    top: 0;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

const NavBar: React.FC<NavBarProps> = ({ title, subtitle }) => {
    return (
        <StyledNavBar>
            <StyledList>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/venues">Venues</StyledLink>
                <StyledLink to="/bookings">Bookings</StyledLink>
                <StyledLink to="/login">Log in</StyledLink>
            </StyledList>
        </StyledNavBar >
    );
};

export default NavBar;