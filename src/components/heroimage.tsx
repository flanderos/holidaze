import React from "react";
import styled from "styled-components";
import HeroImage from "../../src/assets/landingpageimage.png";

interface HeroSectionProps {
    
}

const StyledHeroImage = styled.section `
    /* margin-top: 100px; */
    background-image: url(${HeroImage});
     background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
    height: 100vh; 
    width: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`

const TextContainer = styled.div`
    color: #fff;
    max-width:600px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
    
`

const StyledH1 = styled.h1`
    font-size:35px;
    margin: 0;
`

const StyledCtaButton = styled.button`
    height: 50px;
    width: 250px;
    background-color: transparent;
    color: #fff;
    border-radius: 25px;
    border: 1px solid white;
    font-family: 'Michroma', sans-serif;
    transition: 0.6s;

    &:hover {
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 13px 0px;
    
    }

`

const HeroSection: React.FC<HeroSectionProps> = ({  }) => {
    return (
        <div>
        <StyledHeroImage>
        <TextContainer>
            <StyledH1>Your Journey Starts Here</StyledH1>
            <p>Renting an arena for an event is like buying a mansion for a sleepover—way too big, but hey, at least there’s space for the pizza.</p>
            <StyledCtaButton>See our venues</StyledCtaButton>
        </TextContainer>
        </StyledHeroImage>
        </div>
    );
};

export default HeroSection;