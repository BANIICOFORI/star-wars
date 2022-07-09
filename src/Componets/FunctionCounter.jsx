import React,{useState} from 'react'

 function FunctionCounter() {
    const [Number,setNumber]=useState(0);

    const Increament  =()=>{
        setNumber(Number +1);
    };
    const Decreament  =()=>{
        setNumber(Number -1);
    };
  return (
    <div>
    <h1>Count {Number }</h1>
    <button onClick={Increament } style={{color:"green", textAlign:"center"}}>Increase + </button>
    <button onClick={Decreament } style={{color:"red", textAlign:"center"}}> Decrease - </button>
</div>
  )
}
export default FunctionCounter;