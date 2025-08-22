import React,{useState,useEffect} from 'react';

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
            <p>This is a simple example of using the useEffect hook in React.</p>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

export default UseEffectExample;
