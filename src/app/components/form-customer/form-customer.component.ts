import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../interfaces/customer';
@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit, OnChanges {
 
  customerForm!:FormGroup;
  @Output() customerName = new EventEmitter<string>()
  @Output() customerEdited = new EventEmitter<Customer>()

  @Input() customerEdit!:Customer 
  @Input() flag!:boolean
  constructor(private readonly fb:FormBuilder){}

  ngOnInit(): void {
    
    this.customerForm = this.createCustomerForm()

  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.customerForm = this.createCustomerForm()
  }
  createCustomerForm():FormGroup{
    return  this.fb.group({
      name:[this.customerEdit?.customer_name || '',[Validators.required,Validators.minLength(3)]]
    })
  }
  onSubmit():void{
    const {name} = this.customerForm.value
    this.customerName.emit(name)
    if(this.flag){
      const customer = {
        customer_id:this.customerEdit.customer_id,
        customer_name:name,
        status:this.customerEdit.status,
      }
     this.customerEdited.emit(customer)
    }
  }


}
