import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Orléans';
  label = 'Joli label';

  people = [{
    name: "Casey",
    age: 39
  },
  {
    name: "Cyriel",
    age: 35
  },
  {
    name: "Margot",
    age: 4
  },
];

  constructor() {
    setTimeout(() => {
      this.people[0].age = 10;
    }, 1000);
  }

  clicked(e: MouseEvent): void {
    console.log(e);
    this.people[0].age = 39;
    this.showLogin = true;
  }

  showLogin = true;

  dummyClicked(event : Event) {
    console.log('Dummy!');
    console.log(event);
  }
}
