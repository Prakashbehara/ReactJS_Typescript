export class DateUtils{
    
    static months : Array<String> =['January','February','March','April','May','June',
                             'July','August','September','October','November','December'];
   
    public static formatDate(inputDate : Date){
        return DateUtils.months[ inputDate.getMonth()]+' '+inputDate.getFullYear();
    }


} 