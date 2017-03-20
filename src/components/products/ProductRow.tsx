import * as React from 'react';
import {Product} from "./Product";

export interface IProductRowProp {
   product : Product
   
}

export interface IProductRowState {
    
}

export class ProductRow extends React.Component<IProductRowProp, IProductRowState> {
    
    state:IProductRowState ={}

    constructor (props : IProductRowProp) {
        super(props);       
    }
    
    render() {
        var name = this.props.product.stocked ?
          this.props.product.name :
          <span style={{color: 'red'}}>
            {this.props.product.name}
          </span>;
        return (
          <tr>
            
            <td>{name}</td>
            <td>{this.props.product.price}</td>
          </tr>
        );
      }
    
}