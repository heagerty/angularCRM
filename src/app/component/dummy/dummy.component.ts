import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'crm-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  @Input ()
  label : string = 'Un joli label';
  @Output()
  dummyClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  clicked() : void {
    console.log('clicked');
    this.dummyClicked.emit('Aie!!!!');
  }

}
