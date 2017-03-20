import * as React from 'react';
import { Table} from 'react-bootstrap';

import {PaginationAdvanced} from "./PaginationAdvanced";

export interface IReactTableState {
    columns : number;
}

export interface IReactTableProps {}

export class ReactTable extends React.Component<IReactTableProps, IReactTableState> {
    
    state:IReactTableState = { columns : 4}
    props:IReactTableProps = {}
    
    constructor (props : IReactTableProps) {
        super(props);
       
    }
    
   


    render() {
        return (
                <div>
                <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading2</th>
                        <th>Table heading2</th>        
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
                </Table>
               
               
            </div>
        );
      }

}
