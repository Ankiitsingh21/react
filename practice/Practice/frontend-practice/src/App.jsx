import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [title, setTitle] = useState("my name is ankit");
//   function updateTitle() {
//     setTitle("my name is"+ Math.random());
//   }
//   return (
//     <div>
//       {/* Header with button: */}
//       {/* <HeaderwithButton></HeaderwithButton> */}
//       {/* hi there */}
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header><br />
//       <Header title='ankit2'></Header> <br />
//       <Header title='ankit3'></Header> <br />
//       <Header title='ankit4'></Header> <br />
//     </div>
//   )

  // function HeaderwithButton(){
    // const [title, setTitle] = useState("my name is ankit");
    // function updateTitle() {
    //   setTitle("my name is"+ Math.random());
    // }
  //   return <div>
  //     <button onClick={updateTitle}>Update the title</button>
  //     <Header title={title}></Header><br />
  //   </div>
  // }

// }
// const Header = React.memo ( function ({ title }) {
//   // console.log("rendered");
//   return <div>
//       {title}
//   </div>
// })

function App(){
  return <div>
    <CardWrapper innerComponent={TextComponent}/>
  </div>
}

function CardWrapper({innerComponent}){
  return <div style={{
      border: "1.5px solid #2D3748",        // A modern dark gray border
      borderRadius: "10px",                  // Rounded corners
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)", // Subtle shadow for depth
      padding: "20px",                       // Spacious padding
      backgroundColor: "#fafbfc",            // Light background
      margin: "20px 0",                      // Vertical spacing
      fontFamily: "Segoe UI, Arial, sans-serif", // Modern font
    }}>
    {innerComponent}
  </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

export default App
