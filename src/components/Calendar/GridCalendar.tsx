import * as React from 'react';
import { Button,Grid,Row,Col,Table} from 'react-bootstrap';
import {CalendarHeader} from "./CalendarHeader";
import {CalendarRow} from "./CalendarRow";
import {DayBean} from "./DayBean";


export interface IGridCalendarProp {
    calendarDate : Date;
   
}

export interface IGridCalendarState {
     calendarWeeks : any[];
 
}

export class GridCalendar extends React.Component<IGridCalendarProp, IGridCalendarState> {
    state : IGridCalendarState;
    props : IGridCalendarProp;

    constructor (props : IGridCalendarProp) {
        super();

       
        
      
        
    
    }
    
    
    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }
    
    render () {
       
            let systemTime :Date = new Date();
            let currentDate : Date = new Date(this.props.calendarDate);
            let currentMonthStartDate : Date = new Date(currentDate);
            currentMonthStartDate.setDate(1);
            
            let prevMonthLastDate : Date = new Date(currentMonthStartDate);
            prevMonthLastDate.setDate(0);
            
            let startDate : Date = new Date(prevMonthLastDate.getFullYear(),prevMonthLastDate.getMonth(),
                    prevMonthLastDate.getDate()-prevMonthLastDate.getDay());
                  
            let calendarWeeks1 = new Array();
            
            let calendarStartDay : Date = new Date(startDate);
            for(var week =1;week<=6;week++){
                let calendarDays = new Array<DayBean>();
                calendarWeeks1.push(calendarDays);
                for(var i=1;i<=7;i++){  
                    let day:DayBean = new DayBean(calendarStartDay,false,false);
                    calendarDays.push(day);
                    
                    //Computes current day or not?
                    if(calendarStartDay.getDate() == systemTime.getDate() &&
                            calendarStartDay.getMonth() == systemTime.getMonth()&&
                            calendarStartDay.getFullYear() == systemTime.getFullYear()){
                        day.currentDay = true; 
                    }
                    //Computes current month day or not?                    
                    if(calendarStartDay.getMonth() == currentDate.getMonth()&&
                            calendarStartDay.getFullYear() == currentDate.getFullYear()){
                        day.currentMonthDay = true; 
                    }
                    
                    calendarStartDay = new Date(calendarStartDay.getFullYear(),calendarStartDay.getMonth(),
                            calendarStartDay.getDate()+1);
                    
                }
            }
    
    
            //Displaying input object values testing purpose.
            calendarWeeks1.forEach(function(calendarWeek,weekNo){
                //alert('Week# '+weekNo)
                calendarWeek.forEach(function(calendarDay: Date){
                    //alert(calendarDay);
                })        
            
            })
        
      
        return ( 
             <div>
                <CalendarHeader > </CalendarHeader>
                <CalendarRow rowDataList={calendarWeeks1[0]}  key="1"></CalendarRow>
                <CalendarRow rowDataList={calendarWeeks1[1]} key="2"></CalendarRow>
                <CalendarRow rowDataList={calendarWeeks1[2]} key="3"></CalendarRow>
                <CalendarRow rowDataList={calendarWeeks1[3]} key="4" ></CalendarRow>
                <CalendarRow rowDataList={calendarWeeks1[4]} key="5" ></CalendarRow>
                <CalendarRow rowDataList={calendarWeeks1[5]} key="6" ></CalendarRow>
            </div>
                 
                
                
        );
    }
    
}