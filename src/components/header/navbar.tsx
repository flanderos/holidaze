import React from "react";
import styled from "styled-components";



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

const NavBar: React.FC<NavBarProps> = ({ title, subtitle }) => {
    return (

        <StyledNavBar>
            <StyledList>
                <li>Home</li>
                <li>Venues</li>
                <li>Bookings</li>
                <li>Log in</li>
            </StyledList>
        </StyledNavBar>

    );
};

export default NavBar;