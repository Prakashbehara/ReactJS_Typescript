import * as React from "react";

export interface HelloProps { compiler: string; framework: string; version: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    props : HelloProps;
    
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} 
        
        and {this.props.version}!</h1>;
    }
}


   