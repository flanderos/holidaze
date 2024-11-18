import React from "react";
import NavBar from "./navbar";
import styled from "styled-components";

interface HeaderProps {
    title: string;
}

const StyledHeader = styled.header`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 13px 0px;
  width: 100%;
  padding: 10px 20px;
  
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const StyledH1 = styled.h1`
  font-family: "Michroma";
  margin-left: 150px;
`;

const StyledSubtitle = styled.h2`
    font-size: 20px;
    margin-left: 150px;
    font-family: "Edu AU VIC WA NT Hand";
    font-weight: 400;
`

const Header: React.FC<HeaderProps> = ({ title, box }) => {
    return (
        <StyledHeader>
            <Container>
                <StyledH1>{title}</StyledH1>
                <StyledSubtitle>Your Journey Starts Here</StyledSubtitle>
            </Container>
            <NavBar />
        </StyledHeader>
    );
};

export default Header;
