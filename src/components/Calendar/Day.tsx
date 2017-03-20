import * as React from 'react';
import { Button} from 'react-bootstrap';

import * as http from 'http';

import {DayBean} from "./DayBean";


import {DayResponseBean} from "./DayResponseBean";





export interface IDayProp {
    day : DayBean;
   
}

export interface IDayState {
    
    status : string;
      

}

export class Day extends React.Component<IDayProp, IDayState> {
    props : IDayProp;
    state : IDayState = {status : 'Invoked REST call'};
   
    constructor(){
        super();
        
        this.parseData = this.parseData.bind(this);
    }
    
   
    
    streamData(chunk:any){
                  
    }
    
    parseData(response : any){
        this.setState({feedStatus : response.entity.CSC});
    }
    
   
    
    
    componentDidMount() {       
        
                
        var rest = require('rest');

        var mime = require('rest/interceptor/mime');
        
        var errorCode = require('rest/interceptor/errorCode');
        
        var client = rest.wrap(mime).wrap(errorCode, { code: 500 });
        client({ path: '/RestServices/FeedStatusControler' }).
            then(this.parseData,
            
            function(response : any) {
                console.error('response error: ', response);
            }
            
            
            
            );    
        
        
        
       
      
      
    }
    
   
 render () {
     var dayStyle = {
             "margin-left" : "85%" ,
             "margin-bottom": "40%"
             
     };
     
    
    var tableStyle = {
          "border":"none"  ,
          "width" : "100%",
          "height" : "100%"
    };
         
    
    
           
        return (
              
                <table style= {tableStyle}>
                <tbody>
                <tr>
                    <td   >
                        {this.props.day.dateValue.getDate()}  {this.state.status}
                    </td>
                </tr>
                </tbody>
            </table>



             
                
               
              
        );
    }
        
}