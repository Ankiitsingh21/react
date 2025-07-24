import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

// function App() {
//  const [todos, setTodo] = useState([]);
//  useEffect(()=>{
//   axios.get("https://sum-server.100xdevs.com/todos")
//   .then(function(response){
//     setTodo(response.data.todos);
//   }) 
//  },[]);
//   return (
//     <>
//       {todos.map(todo=> <Todo title={todo.title} description = {todo.description} />)}
//     </>
//   )
// }

// function Todo({ id }) {
//   return (
//     <div>
//       <h1>Todo ID: {id}</h1>
//     </div>
//   );
// }


// function App(){
//   // function Change({
    
//   // }
//   let [id,setId] = useState(1);
//   return <div>
//     <button onClick={() => setId(8)}>1</button>
//     <button>2</button>
//     <button>3</button>
//     <button>4</button>
//     <Todo id={id}/>
//   </div>
// }

// function App(){
//   return <div>
//     <Todo id={3}/>
//   </div>
// }

// function Todo({id}){
//   const [todo,setTodo] = useState({});
//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h5>
//       {todo.description}
//     </h5>
//   </div>
// }

function App(){
  // let number = 3;
  const [number , setNumber ] = useState(0);
  const [inputVlaue , setValue] = useState('');
  const num=parseInt(inputVlaue);


  useEffect(()=>{

  },[inputVlaue])


   let total=0;
    for(let i=0;i<=num;i++){
      total+=i;
    }
    setNumber(total);

  // function change(num){
  //   let total=0;
  //   for(let i=0;i<=num;i++){
  //     total+=i;
  //   }
  //   setNumber(total);
  // }
  return <div>
    <input type="text" placeholder='Enter the number' value={inputVlaue} onChange={(e)=>setValue(e.target.value)}/>
    <h1>sum is {number}</h1>
    <button onClick={()=>change(num)}>Click me</button>
  </div>
}

export default App
