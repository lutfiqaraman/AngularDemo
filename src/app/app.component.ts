import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageHeader : string = "Employee Page";
  classesToApply: string = 'italicsClass boldClass';

  onClick(): void {
    console.log('Button has been clicked !');
  }

}