import React from "react";
import NavBar from "./navbar";
import styled from "styled-components";

interface HeaderProps {
    title: string;
}

const StyledHeader = styled.header`
  background-color: #ffd446;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 13px 0px;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
`;

const StyledH1 = styled.h1`
  font-family: "Michroma";
  margin-left: 150px;
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <StyledHeader>
            <StyledH1>{title}</StyledH1>
            <NavBar />
        </StyledHeader>
    );
};

export default Header;
