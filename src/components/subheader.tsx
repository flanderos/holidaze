import React from "react";
import styled from "styled-components";


type SubHeaderProps = {

}

const StyledSubHeader = styled.section`
background-color: #fff;
height: 200px;
border: 1px solid black;
`

const SubHeader: React.FC<SubHeaderProps> = ({ }) => {
  return (
    <StyledSubHeader>

    </StyledSubHeader>
  );
};

export default SubHeader;