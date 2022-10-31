import React from 'react'

// below objectn for styling
export const Footer= ()=>{
  let footerstyle={
    position: "absolute",
   top: "100vh" ,
   width:"100%"
   

  
}

  return (

    <footer className="bg-dark text-light" style={footerstyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
