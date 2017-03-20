import * as React from 'react';
import { Button} from 'react-bootstrap';
import {Day} from "./Day";
import {DayBean} from "./DayBean";


export interface ICalendarRowProp {
    rowDataList : DayBean[];
}

export interface ICalendarRowState {
    

}

export class CalendarRow extends React.Component<ICalendarRowProp, ICalendarRowState> {
    state : ICalendarRowState;
    props : ICalendarRowProp;
    constructor(){
        super();
    }
    
    render () {
        
         
         var tableStyle = {
            "width"  : "100%",
            "height" : "16.66%",
            "border": "1px solid gray"
            
         };
         
         var tdStyle = {
                 "width"  : "14.28%",
                  "background-color": "khaki",
                  "border": "1px solid gray"
              };
         
         var currentDayTdStyle = {
                 "width"  : "14.28%",
                  "background-color": "aqua",
                  "border": "1px solid gray"
              };
         
         var prevNextMonthTdStyle = {
                 "width"  : "14.28%",
                  "background-color": "white",
                  "border": "1px solid gray"
              };
         
         
         
                 
         let rowData = this.props.rowDataList.map((dayObj,index) =>  
            
           <td style=   {dayObj.currentDay ? currentDayTdStyle: dayObj.currentMonthDay?tdStyle:prevNextMonthTdStyle } key={dayObj.dateValue.getDate()}> 
              <Day day={dayObj}   key={dayObj.dateValue.getDate()}></Day> 
           </td>
         
        
     );
         
         
        return (
              
               
                
                    <table id="row" style = {tableStyle}  >
                        <tbody >
                            <tr >
                               {rowData}                       
                            </tr>
                        </tbody>
                    </table>
              
        );
    }
        
}