import * as React from 'react';

import {Product} from "./Product";
import {ProductTable} from "./ProductTable";
import { FormControl,FormGroup,Form,Checkbox} from 'react-bootstrap';

export interface ISearchBarProp {
    defaultCategory : string;
    onFilterTextInput : any;
    children? :   ProductTable;

}

export interface ISearchBarState {
    searchCategory : string;
    
}

export class SearchBar extends React.Component<ISearchBarProp, ISearchBarState> {
    props:ISearchBarProp;
    state:ISearchBarState={searchCategory : this.props.defaultCategory};

    constructor (props : ISearchBarProp) {
        super(props);  
        this.changeSearchCategory = this.changeSearchCategory.bind(this);
       
    }
    
    changeSearchCategory (e: any) {      
        this.props.onFilterTextInput(e.target.value);       
    }   
   

    render() {
        
       
        
        
        React.Children.forEach(this.props.children, (column) => {
            alert( this.props.children.props.searchCategory);
      });
        
        
        return (
          <div>
                <br></br>
                <Form inline>
            <FormGroup bsSize="small">
                <FormControl
                type="text" size={60} 
                value={this.props.defaultCategory}
                placeholder="Enter text"
                onChange={this.changeSearchCategory}
              />
            </FormGroup>
                
          
                
            <p>
                <Checkbox  >
              
              </Checkbox>
            
              {' '}
              Only show products in stock
            </p>
           </Form>
          </div>
        );
      }
    
}