import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer,onCustomer } from '../../interfaces/customer';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  @Input() footerContent!:string
  @Input() entity!:string
  @Input() customers!:Customer[]
  @Output() customerToEdit =  new EventEmitter<onCustomer>()
  @Output() customerToDelete =  new EventEmitter<onCustomer>()


  onEdit(customer:Customer):void{
    const customerObj:onCustomer={
      customer:customer,
      visible:true
    }

    this.customerToEdit.emit(customerObj);
  }

  onDelete(customer:Customer):void{
    const customerObj:onCustomer={
      customer:customer,
      visible:true
    }
    this.customerToDelete.emit(customerObj);
  }

}
