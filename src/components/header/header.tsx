import React from "react";
import HeadLine from "./headline";
import NavBar from "./navbar"
import styled from "styled-components";


type HeaderProps = {
    title: string;
    subtitle?: string;
};

const StyledHeader = styled.header`
  background-color: #ffd446;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <StyledHeader>
            <div>
            <h1>Holidaze</h1>
            </div>
            <NavBar title="navbar"></NavBar>
        </StyledHeader>
    );
};

export default Header;