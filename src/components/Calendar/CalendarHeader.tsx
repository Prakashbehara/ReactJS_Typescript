import * as React from 'react';
import { Button} from 'react-bootstrap';



export interface ICalendarHeaderProp {
    
}

export interface ICalendarHeaderState {
    

}

export class CalendarHeader extends React.Component<ICalendarHeaderProp, ICalendarHeaderState> {
    state : ICalendarHeaderState;
    props : ICalendarHeaderProp;
    constructor(){
        super();
    }
    
    render () {
        
         
         var tableStyle = {
            "width"  : "100%",
            "height" : "10%",
            "border": "1px solid gray"
           
            
         };
         
         var tdStyle = {
                 "width"  : "14.28%",
                 "background-color": "aliceblue"
                
              }
          
        return (
                <table id="row" style = {tableStyle}  >
                        <tbody >
                            <tr >
                                <td style= {tdStyle} ><label>Su</label> </td>
                                <td style= {tdStyle} ><label>Mo</label> </td>
                                <td style= {tdStyle} ><label>Tu</label> </td>
                                <td style= {tdStyle} ><label>We</label> </td>
                                <td style= {tdStyle} ><label>Th</label> </td>
                                <td style= {tdStyle} ><label>Fr</label> </td>
                                <td style= {tdStyle} ><label>Sa</label> </td>
                            </tr>
                        </tbody>
                    </table>
              
        );
    }
        
}