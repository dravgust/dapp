import React from "react";

class StateComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0,
            comment: []
        }
        this.myFref = React.createRef();
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({count: currentCount});
    }

    addComment = () =>{
        let commentValue = this.myFref.current.value;
        let comments = this.state.comment.push(commentValue);
        this.setState({'comments': comments});
        this.myFref.current.value = '';
    }

    render() {
        return (
            <>
                <h1>State</h1>
                <div><button onClick={this.handler}>This button changes state</button></div>
                <div>{this.state.count % 2 === 0 ? 'even' : 'odd'}</div>
                <div>{this.state.count}</div>
                <div><textarea ref={this.myFref}></textarea></div>
                <div><button onClick={this.addComment}>Add Comment</button></div>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index}>{item}</li>)}    
                    </ul>
                </div>
            </>
        )
    }
}

export default StateComponent;