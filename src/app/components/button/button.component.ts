import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() label !: string
 @Input() nzType : any = 'default'
 @Input() nzShape : any = 'round'
 @Input () disabled ?:boolean = false
 @Input()  nzDanger :boolean = false
}
