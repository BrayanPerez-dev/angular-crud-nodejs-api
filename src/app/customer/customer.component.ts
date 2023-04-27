import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { Customer, onCustomer } from '../interfaces/customer';
import { ModalComponent } from '../components/modal/modal.component';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  footerContent: string = new Date().toLocaleDateString();
  customers!: Customer[];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  isVisible: boolean = false;
  customer!: Customer;
  constructor(
    private readonly customerService: CustomerService,
    private readonly nzMessageService: NzMessageService
  ) {}
  visible: boolean = false;
  showPopconfirm: boolean = false;
  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe((result: Customer[]) => (this.customers = [...result]));
  }

  addCustomer(name: string): void {
    this.customerService
      .addCustomer(name)
      .subscribe(
        (customer: Customer) => (this.customers = [...this.customers, customer])
      );
  }

  editCustomer(customer: Customer): void {
    const { customer_id, customer_name } = customer;
    this.customerService
      .editCustomer(customer_id, customer_name)
      .subscribe(() => {
        this.isVisible = false;
        this.getCustomers();
      });
  }

  onEdit(onCustomerEdit: onCustomer): void {
    this.customer = onCustomerEdit.customer;
    this.isVisible = onCustomerEdit.visible;
    this.modalComponent.showModal();
  }

  onDelete(onCustomerDelete: onCustomer): void {
    this.customer = onCustomerDelete.customer;
    this.showPopconfirm = onCustomerDelete.visible;
  }

  showConfirm(visible: boolean): void {
    this.showPopconfirm = visible;
  }

  cancel(): void {
    this.showPopconfirm = false;
  }

  deleteCustomer(): void {
    this.customerService
      .deleteCustomer(this.customer.customer_id)
      .subscribe(() => {
        this.showPopconfirm = false;
        this.getCustomers();
      });
  }
}
