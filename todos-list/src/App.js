import logo from './logo.svg';

import './App.css';
import Header from "./my_components/Header";
import Todos from "./my_components/Todos";
//import Todo from "./my_components/Todo";
import Footer from "./my_components/Footer";

//searchbar value if not given here its true by default as in headerjs headerprops seachvbar default value i dtrue
function App() {

  const ondelete = () =>{
console.log("i am on delte of todo ");
  

}
  let todos= [
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
      sno:1,
       title: "going home",
       desc: "go home and take bah"
    },
  ]
  return (  
    <>
    
    <Header title="my todos list" searchbar ={false}/> 
    <Todos todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  ); 
}

export default App;
