import React from "react";
import styled from "styled-components";
import HeroImage from "../../src/assets/landingpageimage.png";

interface HeroSectionProps {
    
}

const StyledHeroImage = styled.section `
    margin-top: 400px;
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

const HeroSection: React.FC<HeroSectionProps> = ({  }) => {
    return (
        <div>
        <StyledHeroImage>
        <TextContainer>
            <StyledH1>Your Journey Starts Here</StyledH1>
            <p>Renting an arena for an event is like buying a mansion for a sleepover—way too big, but hey, at least there’s space for the pizza.</p>
            <h5>Albert Einstein</h5>
        </TextContainer>
        </StyledHeroImage>
        </div>
    );
};

export default HeroSection;