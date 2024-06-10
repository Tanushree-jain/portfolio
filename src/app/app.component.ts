import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  const mySecret = process.env.MY_SECRET;
console.log(The secret is ${mySecret});
}
