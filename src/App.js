import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Todolist from "./components/Todolist";
import store from "./redux/config/configStore";




const App = () => {
  return(
    <Provider store={store}>
      <Todolist/>
    </Provider>
  )
}
export default App;