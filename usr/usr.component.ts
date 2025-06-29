import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usr',
  imports: [],
  templateUrl: './usr.component.html',
  styleUrl: './usr.component.css'
})
export class UsrComponent {
  @Input() user:string=''
}
