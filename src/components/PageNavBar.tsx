import * as React from "react";

class Greeter {
    greeting: string;
    name: string;
    constructor(message: string , name1: string) {
        this.greeting = message;
        this.name = name1;
    }
    greet() {
        return "Hello, "+this.name+ " " + this.name;
    }
}

export interface HelloProps { compiler: string; framework: string; version: string }

export interface HelloState { editText: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class PageNavBar extends React.Component<HelloProps, HelloState> {
    
    state: HelloState = {editText: ''};
    props : HelloProps;
    constructor(props : HelloProps){
        super(props);
        // set initial state
        this.state = { editText: this.props.compiler};
        
      }
    
    render() {
      
        return <h1>Hello from {this.props.compiler} and {this.props.framework} 
        
        and {this.props.version}!</h1>;
    }
}


   