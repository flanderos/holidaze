import React from "react";
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 13px 0px;
`;

const StyledH1 = styled.h1`
    margin-left: 5px;
    font-family: "Michroma";
`;

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <StyledHeader>
            <StyledH1>{title}</StyledH1>
            <NavBar title="navbar"></NavBar>
        </StyledHeader>
    );
};

export default Header;