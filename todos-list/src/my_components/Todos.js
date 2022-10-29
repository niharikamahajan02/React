import React from 'react'
import Todo from "../my_components/Todo";

// props ke andar dono cheezo ko le liya i.e todos , ondelete
 const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">To dos list </h3>

      { props.todos.length===0? "NO TODOS TO DIPLAY" :
      
       
        props.todos.map((todoitm)=>
        {
           return <Todo todoit={todoitm} key={todoitm.sno} ondelete={props.ondelete}/>
       }
       )
       }
      
    </div>
  ) 
}

export default Todos
