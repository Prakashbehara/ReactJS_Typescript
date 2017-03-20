import * as React from 'react';
import { Table,FormGroup,FormControl,Form,Button} from 'react-bootstrap';

import {ProductCategoryRow,IProductCategoryRowProp} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import {Product} from "./Product";
import {PaginationAdvanced} from "../PaginationAdvanced";
import {CSVExport} from "./CSVExport";


export interface IProductTableProp {
    products : Product[];
    searchCategory : string;
    recordsPerPage : number;

}

export interface IProductTableState {
    currentPageNo : number;
    pageLevelproducts : Product[];
    recordsPerPage : number;

}

export class ProductTable extends React.Component<IProductTableProp, IProductTableState> {
    
    props : IProductTableProp;
    state:IProductTableState ={currentPageNo : 1 , pageLevelproducts : this.props.products , recordsPerPage : this.props.recordsPerPage}

    constructor (props : IProductTableProp) {
        super(props);   
        this.pagination = this.pagination.bind(this);
        this.changePaginationRecords = this.changePaginationRecords.bind(this);
    }
    
    pagination(pageNo: number){
        this.setState({currentPageNo : pageNo})
    }
   
    changePaginationRecords(e : any){
        this.setState({recordsPerPage : e.target.value , currentPageNo :1 })
    }
    
    count : number=0;

    render() {
        
        let todoItems = this.props.products.map(product => {              
            if(product.category == this.props.searchCategory ){
                this.count = this.count+1;
                return <ProductRow product={product}  key={this.count} />;
            }
           
        });
        
        let filterItems = new Array();
        
        for(let i=0;i<todoItems.length;i++){
           if(todoItems[i]!= undefined){
                filterItems.push(todoItems[i]);
           }
            
        }
        
       
        
        return (
          <div>
        <Form inline>
       
        <FormGroup bsSize="small">
            <FormControl type="text"  placeholder="Small text" size={4}   value= {this.state.recordsPerPage}  onChange={this.changePaginationRecords} />
        </FormGroup>
        {'  '}
        <FormGroup>        
            <CSVExport data={this.props.products} ></CSVExport>
        </FormGroup>
       
      </Form>
            
           
                     
         
                      
                        
                
        
              
              
              
              <Table striped bordered condensed hover responsive   >
                <thead>
                  <tr>
                    
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody><ProductCategoryRow  category={this.props.searchCategory}   ></ProductCategoryRow>
                    {filterItems.slice(this.state.currentPageNo*this.state.recordsPerPage-this.state.recordsPerPage, this.state.currentPageNo*this.state.recordsPerPage)}</tbody>
              </Table>
                    <PaginationAdvanced  activePage={this.state.currentPageNo} onPageNavidation={this.pagination} 
                    pagesCount={Math.round((filterItems.length/this.state.recordsPerPage))} maxPageLinks={10} >
                    </PaginationAdvanced>
          </div>
        );
      }
  }