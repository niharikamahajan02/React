import logo from './logo.svg';

import './App.css';
import Header from "./my_components/Header";
import Todos from "./my_components/Todos";
//import Todo from "./my_components/Todo";
import Footer from "./my_components/Footer";
import React, { useState } from 'react';

//searchbar value if not given here its true by default as in headerjs headerprops seachvbar default value i dtrue
function App() {

  const ondelete = (todo) =>{
console.log("i am on delte of todo ");   
  
setTodos(todos.filter((e)=>{
  return e!==todo;
}))

}

//setTodos is a func which would update the todos everytime
  const [todos,setTodos]=useState( [
    { 
      sno:1,
       title: "going market",
       desc: "go marketa nd buy aaples"
    },
    {
      sno:2,
       title: "going mall",
       desc: "go mall nd buy "
    },
    {
      sno:3,
       title: "going home",
       desc: "go home and take bah"
    },
  ]);

  return (  
    <>
    
    <Header title="my todos list" searchbar ={false}/> 
    <Todos todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  ); 
}

export default App;
