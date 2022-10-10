import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
        <StHeaderDiv>
            <span>My Todo List</span>
            <span>React</span>
        </StHeaderDiv>
    )
}

const StHeaderDiv = styled.div`
    margin: 0 auto;
    width : 1200px;
    height: 50px;
    line-height: 50px;
    display: flex;
    border : 1px solid gainsboro;
    justify-content: space-between;
    border-radius: 20px;

    & span {margin: 0px 15px;}
`;

export default Header