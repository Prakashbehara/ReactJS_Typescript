import * as React from 'react';

import {CalendarNavigator} from "./CalendarNavigator";
import {GridCalendar} from "./GridCalendar";


export interface IFilterableGridCalendarProp {
   
   
}

export interface IFilterableGridCalendarState {
    calendarDate : Date;
}

export class FilterableGridCalendar extends React.Component<IFilterableGridCalendarProp, IFilterableGridCalendarState> {
    
    state:IFilterableGridCalendarState = {calendarDate : new Date()}
    props : IFilterableGridCalendarProp;
    constructor (props : IFilterableGridCalendarProp) {
        super(props);    
        this.changeCalendarMonth = this.changeCalendarMonth.bind(this);
       
    }
    
    changeCalendarMonth(filterText : string) {
        if(filterText == 'prev'){
            this.setState({calendarDate : new Date(this.state.calendarDate.getFullYear(),this.state.calendarDate.getMonth()-1,1)})
        }else{
            this.setState({calendarDate : new Date(this.state.calendarDate.getFullYear(),this.state.calendarDate.getMonth()+1,1)})
        }
    }
    
    render() {
        return (
         
          <div id="example1" style={{"height":"70%"}}>
            <CalendarNavigator naigationHandler ={this.changeCalendarMonth} calendarDate = {this.state.calendarDate} />
            <GridCalendar calendarDate = {this.state.calendarDate}  />
          </div>
                
               
              
         
        );
  }
    
}