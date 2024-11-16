import React from "react";
import styled from "styled-components";



type NavBarProps = {
    title: string;
    subtitle?: string;
};

const NavBar: React.FC<NavBarProps> = ({ title, subtitle }) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Venues</li>
                <li>Bookings</li>
                <li>Log in</li>
            </ul>
        </nav>
    );
};

export default NavBar;