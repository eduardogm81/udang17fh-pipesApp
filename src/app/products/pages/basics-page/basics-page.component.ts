import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = 'eduardo';
  public nameUpper: string = 'EDUARDO';
  public fullName: string = 'eDuarDo gOmEz'
  public customDate: Date = new Date();
}
