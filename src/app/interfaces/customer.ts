export interface Customer{
    customer_id:number;
    customer_name:string;
    status:boolean;
}


export interface onCustomer{
    customer:Customer
    visible:boolean
   }