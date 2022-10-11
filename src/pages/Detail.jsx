import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getTodoById } from "../redux/modules/todos";
import { GETBYID } from "../redux/modules/todos";


const Detail = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const todos = useSelector((state)=>state.Todos);
    const currentTodo = useSelector((state)=> state.Todos.currentTodo)

    console.log(currentTodo)

    
        return(
                    <StDetail>
                        <StDetailBox>
                            <StIdBox>hello World</StIdBox>
                            <StBtn onClick={()=>navigate(-1)}>이전으로</StBtn>
                        </StDetailBox>
                        <StTitleBox>
                          제목 :  {currentTodo.title}
                        </StTitleBox>
                        <StContentBox>
                            내용 : {currentTodo.content}
                        </StContentBox>
                    </StDetail>
            )
}

const StDetailBox = styled.div`
    display: flex;
    width:500px;
    justify-content: space-between;

`;

const StDetail = styled.div`
    width:500px;
    height: 400x;
    border-radius: 5px;
    background-color:#a7ccf6;;
    border: 3px solid #e1e8f1;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;


`;

const StIdBox = styled.div`
    display: flex;
    margin: 20px 20px;
    justify-content: space-between;
    background-color: #a7ccf6;;


`;

const StBtn = styled.button`
    border-radius: 10px;
    border : 2px solid white;
    width:100px;
    height: 30px;
    margin : 20px 20px;
    background-color: white;
    cursor : pointer;
`;

const StTitleBox = styled.div`
    height: 100px;
    display: flex;
    margin : 20px 20px;
    font-size : 25px;
    background-color: #a7ccf6;;

`;

const StContentBox = styled.div`
    height: 100px;
    display: flex;
    margin : 20px 20px;
    font-size : 20px;
`;
export default Detail