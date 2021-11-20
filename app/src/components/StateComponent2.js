import React from "react";
import {useState} from 'react';
import CountComponent from '../components/CountComponent';

const StateComponent2 = () => {

    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);

    let myFref = React.createRef();

    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }

    let addComment = () => {
        let commentValue = myFref.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myFref.current.value = '';
    }

    console.log("...");
    var result = CountComponent();
    console.log(result);

    return (
        <>
            <h1>State</h1>
            <div><button onClick={handler}>This button changes state</button></div>
            <div>{count % 2 === 0 ? 'even' : 'odd'}</div>
            <div>{count}</div>
            <div><textarea ref={myFref}></textarea></div>
            <div><button onClick={addComment}>Add Comment</button></div>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}    
                </ul>
            </div>

            <div>{result.count}</div>
            <div><button onClick={result.increment}>Increment</button></div>
        </>
    )
}

export default StateComponent2;