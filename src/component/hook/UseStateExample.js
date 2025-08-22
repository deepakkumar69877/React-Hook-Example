import React,{useState} from 'react';

const UseStateExample = () => {
    const[count,setCount]=useState(0);
    return(
        <>
            <p>This is a simple example of using the useState hook in React.</p>
            <p>current count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )

}

export default UseStateExample;
