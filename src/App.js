import React, { useState,useEffect  } from "react";


export default function App() {
  let [num, setNum] = useState(0)
  let [text, setText] = useState(4)
  let [price, setPrice] = useState(6)
  function handleSetNum(){
    setNum(num+1)
  }
  function handleSetText(){
    
    setText(text+1)
  }
  function handleSetPrice(){
    
    setPrice(price+1)
  }
  useEffect(()=>{
    console.log('sasas')
  },[])
  return (
    <div>
      <div onClick={handleSetNum}>num:{num}</div>
      <div onClick={handleSetText}>text:{text}</div>
      <div onClick={handleSetPrice}>price:{price}</div>
    </div>
  );
}
