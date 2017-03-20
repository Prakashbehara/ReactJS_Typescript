import * as React from 'react';

export interface IProductCategoryRowProp {
    category : string;
   
}

export interface IProductCategoryRowState {
    
}

export class ProductCategoryRow extends React.Component<IProductCategoryRowProp, IProductCategoryRowState> {
    
    props:IProductCategoryRowProp 
    state:IProductCategoryRowState ={}


    constructor (props : IProductCategoryRowProp) {
        super(props);       
    }
    
    render() {
        return <tr><th  >{this.props.category}</th></tr>;
      }
}