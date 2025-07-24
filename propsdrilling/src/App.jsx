import { useContext, useState } from "react"
import { counterContext } from "./context";

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
    <counterContext.Provider value={count}>
             <Count  setCount={setCount}/>
             {/* <Button count={count} setCount={setCount}/> */}
    </counterContext.Provider>
    </>
  )
}

function Count({ setCount}){
  return <div>
    <CountRenderer/>
    <Button  setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count = useContext(counterContext);
  return <div>
    {count}
  </div>
}

function Button({ setCount}){
  const count = useContext(counterContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>
      Increase the count
    </button>
    <br />
    <br />
    <br />
    <button onClick={()=>{
      setCount(count-1);
    }}>
      Decrease the count
    </button>
    <br />
    <br />
    <br />
    <button onClick={()=>{
      setCount(0);
    }}>Reset</button>
  </div>
}

export default App
