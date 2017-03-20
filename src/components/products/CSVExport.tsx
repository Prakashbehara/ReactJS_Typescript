import * as React from 'react';
import { Button} from 'react-bootstrap';
import {Product} from "./Product";



export interface ICSVExportProp {
    data : Product[];
}

export interface ICSVExportState {
    

}

export class CSVExport extends React.Component<ICSVExportProp, ICSVExportState> {
    state : ICSVExportState;
    props : ICSVExportProp;

    constructor () {
        super();
        this.exportData = this.exportData.bind(this);
    }
    
    exportData(){
        //alert("File records size "+this.props.data.length);
        let csvContent : string = "data:text/csv;charset=utf-8,";
        let dataString : string = "";
        this.props.data.forEach(function(product,index){
            dataString =  dataString +product.category+','+product.name+','+product.price+','+product.stocked+"\n";
        });
        
        csvContent += dataString;
        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "your_filename.csv");
        document.body.appendChild(link); // Required for FF

        link.click();
        
    }
    
   
    render () {
        
        return (
                <Button bsStyle="link" onClick={this.exportData} >CSV Export</Button>
        );
    }
    
}