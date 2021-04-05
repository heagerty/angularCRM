import { Component, OnInit } from '@angular/core';
import { DemoObservableService } from '../common/demo-observable.service';
import { map, take }  from 'rxjs/operators';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

//phoneNumber = '0654687913';

  constructor(private demoObservable: DemoObservableService) { }

  ngOnInit(): void {
  }


  runObservable() : void {
    this.demoObservable.test1().pipe(
        map((item)=>{return item * 10}),
        take(2)
    ).subscribe(
      (item) => { console.log('next', item, `j'ai reçu ${item}`)},
      (error) => { console.error('error', error) },
      () => { console.log('The end') }
    );
  }


}
