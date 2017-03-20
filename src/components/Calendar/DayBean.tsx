export class DayBean{
   
    dateValue : Date;
    currentDay : boolean;
    currentMonthDay : boolean;
    constructor( dateValue:Date , currentDay:boolean , currentMonthDay: boolean) {     
       this.dateValue = dateValue;
       this.currentDay = currentDay;
       this.currentMonthDay = currentMonthDay;
    }


}