import * as React from 'react';

import { Pager} from 'react-bootstrap';

import {DateUtils} from './DateUtils';

export interface ICalendarNavigatorProp {
    calendarDate : Date;
    naigationHandler : any;

}

export interface ICalendarNavigatorState {

    
}

export class CalendarNavigator extends React.Component<ICalendarNavigatorProp, ICalendarNavigatorState> {
    props:ICalendarNavigatorProp;
    state:ICalendarNavigatorState;

    constructor (props : ICalendarNavigatorProp) {
        super(props);  
        this.navigateToPrevMonth = this.navigateToPrevMonth.bind(this);
        this.navigateToNextMonth = this.navigateToNextMonth.bind(this);
       
    }
    
    navigateToPrevMonth () {      
        this.props.naigationHandler("prev");   
    } 
    
    navigateToNextMonth () {      
        this.props.naigationHandler("next");   
    }
   

    render() {
        
        var labelStyle = {
                "margin-right":"60%"
                
        }; 
        
        var pageStyle = {
                "margin-right":"60%"
                
        }; 
        
                
        return (
               
                <Pager >
                <label > {DateUtils.formatDate(this.props.calendarDate)} </label>
                <Pager.Item   href="#"   onClick = {this.navigateToPrevMonth}   >Previous</Pager.Item>
                {' '}
                <Pager.Item  href="#" onClick = {this.navigateToNextMonth} >Next</Pager.Item>
              </Pager>
          
        );
      }
    
}