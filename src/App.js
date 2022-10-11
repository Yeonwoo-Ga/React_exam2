import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useParams } from "react-router-dom";
import Todolist from "./components/Todolist";
import store from "./redux/config/configStore";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { GlobalStyles } from "./Global";





const App = () => {

  const data = useSelector((state)=>state.Todos.todos)

  return(
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;