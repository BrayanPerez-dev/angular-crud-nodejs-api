import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { CustomerComponent } from './customer/customer.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { ListComponent } from './components/list/list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    FormCustomerComponent,
    ListComponent,
    ButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    NzListModule,
    HttpClientModule,
    NzPopoverModule,
    NzCardModule,
    NzModalModule,
    NzMessageModule,
    NzPopoverModule,
    NzPopconfirmModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
