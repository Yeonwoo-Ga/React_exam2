import React from "react";
import styled from "styled-components";
import Todos from "../redux/modules/todos";

const todoBox = () =>{
    return(
        <StTodoBox>
        </StTodoBox>

    )
}

const StTodoBox = styled.div`
    width:300px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border : 5px solid purple;
    border-radius: 30px;
    padding:0px 30px;
    gap:50px;
`;

export default todoBox;