const initialState = {
  todos : [{  
     title : '리액트',
     id : new Date(),
     content : '공부하자!',
     isDone : false
    }]
}

export const TOGGLE_ISDONE = 'TOGGLE_ISDONE'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE = 'DELETE'


export const addTodo = (payload) => {
    return { type: CREATE_TODO, payload}
}

export const toggleStatusTodo = (id)=>{
    return {type: TOGGLE_ISDONE,
        payload : { id : id}}
    
}

export const deleteTodo = (id)=>{
    return {type : DELETE ,
    payload : {id : id}}
}





const Todos = (state = initialState,action) => {
   switch(action.type){
    case CREATE_TODO:
        return{
            ...state,
            todos:[...state.todos, action.payload]
        }
    case TOGGLE_ISDONE:
        console.log(action.payload)
        return{
            ...state,
            todos: state.todos.map((todo) =>
              todo.id === action.payload.id
                ? { ...todo, isDone: !todo.isDone }
                : todo)
        }
    case DELETE:
        return{
            ...state,
            todos : state.todos.filter((todo)=>
            todo.id !== action.payload.id
            )
        }
        
        default:
            return state;
   }
}

export default Todos