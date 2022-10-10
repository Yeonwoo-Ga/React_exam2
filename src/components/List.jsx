import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Todos from "../redux/modules/todos";
import { toggleStatusTodo } from "../redux/modules/todos";
import { TOGGLE_ISDONE } from "../redux/modules/todos";
import { DELETE } from "../redux/modules/todos";
import { deleteTodo } from "../redux/modules/todos";


const List = () => {

    const {todos} = useSelector((state)=>state.Todos)
    const dispatch = useDispatch();
    return(
    <>
    <StListBox>
        <StListBox2>
            <h2>할일..!!!</h2>
        <StContentBox>
        {todos.map(todo => (
           todo.isDone == false ? <StTodoBox key={todo.id}>
                <div>
                    <h2>{todo.title}</h2>
                    <span>{todo.content}</span>
                </div>
                <StButtonBox>
                        <StDelBtn onClick={()=>{dispatch(deleteTodo(todo.id))}}>삭제하기</StDelBtn>
                       { todo.isDone == false ? <StDoneBtn onClick={()=>{{
                        dispatch(toggleStatusTodo(todo.id))

                       }}}>완료</StDoneBtn> : null}
                </StButtonBox>
            </StTodoBox> : null
        ))}       
        </StContentBox>
        </StListBox2>
    </StListBox>
    <StListBox>
        <StListBox2>
            <h2>다했다..!!!</h2>
        <StContentBox>
            {todos.map(todo => (
               todo.isDone == true ? <StTodoBox key={todo.id}>
                    <div>
                        <h2>{todo.title}</h2>
                        <span>{todo.content}</span>
                    </div>
                    <StButtonBox>
                        <StDelBtn onClick={()=>{dispatch(deleteTodo(todo.id))}}>삭제하기</StDelBtn>
                       { todo.isDone == true ? <StCancleBtn onClick={()=>{{
                        dispatch(toggleStatusTodo(todo.id))

                       }}}>취소</StCancleBtn> : null}
                    </StButtonBox>
                </StTodoBox> : null
            ))}
        </StContentBox>       
        </StListBox2>
    </StListBox>
    </>
)}

const StListBox = styled.div`
    display: flex;
    gap:15px;
    flex-wrap: wrap;
    flex-direction: row;


`;

const StTodoBox = styled.div`
    width:300px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border : 5px solid purple;
    border-radius: 30px;
    padding:0px 30px;
    gap:30px;
    text-align: center;
    justify-content: center;
`;

const StListBox2 = styled.div`
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

`;

const StContentBox = styled.div`
    display: flex;
    gap:20px;
    flex-wrap: wrap;

`;

const StButtonBox = styled.div`
    display: flex;
    justify-content: space-evenly;


`;

const StDelBtn = styled.button`
    background-color: white;
    border-radius: 10px;
    padding:10px;
    width:120px;
    border : 3px solid greenyellow;
`;

const StDoneBtn = styled.button`
    background-color: white;
    border-radius: 10px;
    padding:10px;
    width:120px;
    border : 3px solid red;

`;

const StCancleBtn = styled.button`
    background-color: white;
    border-radius: 10px;
    padding:10px;
    width:120px;
    border : 3px solid red;

`;


export default List