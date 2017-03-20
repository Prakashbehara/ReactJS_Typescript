import * as React from 'react';

import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";
import {Product} from "./Product";

export interface IFilterableProductTableProp {
    products : Product[]
    defaultCategory : string
    defaultRecordsPerPage : number;
}

export interface IFilterableProductTableState {
    searchCategory : string;
    recordsPerPage : number;
}

export class FilterableProductTable extends React.Component<IFilterableProductTableProp, IFilterableProductTableState> {
    props : IFilterableProductTableProp; 
    state:IFilterableProductTableState ={ searchCategory : this.props.defaultCategory, recordsPerPage: this.props.defaultRecordsPerPage}
   
    constructor (props : IFilterableProductTableProp) {
        super(props);    
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
       
    }
    
    handleFilterTextInput(filterText : string) {
        this.setState({
            searchCategory: filterText
        });
      }
    
    render() {
        return (
          <div>
            <SearchBar defaultCategory={this.state.searchCategory}  onFilterTextInput={this.handleFilterTextInput}  />
            <ProductTable products={this.props.products} searchCategory={this.state.searchCategory}  recordsPerPage={this.state.recordsPerPage} />
               
              
          </div>
        );
  }
    
}