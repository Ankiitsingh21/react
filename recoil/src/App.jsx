import {  useState } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState , RecoilRoot } from "recoil"
import { countAtom } from "./store/atom/count"
// import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
    <RecoilRoot>
      <Count/>    
    </RecoilRoot>
    </>
  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Button/>
  </div>
}

function CountRenderer(){
 const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <br />
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    {(count%2==0) ? "It is even": null}
  </div>
}

function Button(){
  // const count =useRecoilValue(countAtom);
  // const setCount = useSetRecoilState(countAtom);
  const [count,setCount] = useRecoilState(countAtom);
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
