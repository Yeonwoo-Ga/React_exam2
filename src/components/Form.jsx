import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import Todos from "../redux/modules/todos";
import {addTodo} from '../redux/modules/todos'
import { CREATE_TODO } from "../redux/modules/todos";
import { toggleStatusTodo } from "../redux/modules/todos";
import { TOGGLE_ISDONE } from "../redux/modules/todos";







const Form = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const todos = useSelector((state)=>state.Todos.todos)
    const dispatch = useDispatch();

    const changeHandler = (e) =>{
        setTitle(e.target.value)
        
    }

    const changeContentHandler = (e) =>{
        setContent(e.target.value)
    }
    return(
            <StContainer>
                <StInputBox>
                <StSpan>제목</StSpan>
                <StInput type="text" value={title} onChange={changeHandler}/>
                <StSpan>내용</StSpan>
                <StInput type="text" value={content}  onChange={changeContentHandler}/>
            </StInputBox>
            <StButton onClick={()=>{
                dispatch(addTodo({
                    id :  new Date(),
                    title : title,
                    content : content,
                    isDone : false
                }))
            }}>추가하기</StButton>
        </StContainer>   
    )
}

const StContainer = styled.div`
    margin: 0 auto;
    width : 1200px;
    height: 100px;
    display: flex;
    border : 1px solid gainsboro;
    border-radius: 20px;
    justify-content: space-be;
    align-items: center;
    background-color: ghostwhite;
    gap:300px;
`;

const StInput = styled.input`
    border-style: 1px solid black;
    height: 30px;
    width : 250px;
    border-radius: 20px;
`;

const StButton = styled.button`
    display:flex;
    border:none;
    width:100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: plum;

    & button:hover{
        cursor: pointer;
    }
`;

const StSpan = styled.span`
    font-weight : bold;
`;

const StInputBox = styled.div`
    height: 40px;
    line-height: 40px;
    width:700px;
    align-items: center;
    vertical-align: middle;
    display: flex;
    gap: 30px;
    margin : 0 20px;`;

export default Form;