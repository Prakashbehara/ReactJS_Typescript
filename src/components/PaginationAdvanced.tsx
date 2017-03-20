import * as React from 'react';
import {Pagination} from 'react-bootstrap';

export interface IPaginationState {
    activePage : number;
}

export interface IPaginationProps {
    activePage : number
    onPageNavidation : any
    pagesCount : number
    maxPageLinks : number
}

export class PaginationAdvanced extends React.Component<IPaginationProps, IPaginationState> {
    props:IPaginationProps
    state:IPaginationState = {activePage : this.props.activePage}
    
    

    constructor (props : IPaginationProps) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(eventKey : any) {
        this.props.onPageNavidation(eventKey);
    }
    
    render() {
        return (
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={this.props.pagesCount}
            maxButtons={this.props.maxPageLinks}
            activePage={this.props.activePage}
            onSelect={this.handleSelect} />
        );
      }

}