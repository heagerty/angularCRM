import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss']
})
export class ConsumerListeComponent implements OnInit {

  constructor(private consumersService : ConsumerService, private router: Router) {
    this.formFilter = new FormGroup(
      {filter: new FormControl()}
    );
   }

  consumers: Consumer[] = [];

  formFilter: FormGroup;

  ngOnInit(): void {
    this.setSubscriber();
  }

  onChange () {
    const filter = this.formFilter.value.filter;
    this.setSubscriber(filter);

  }

  private setSubscriber(filter?: string) {
    this.consumersService.getConsumers(filter).subscribe(
      (consumers) => { this.consumers = consumers },
      (error) => { console.error(error) },
      () => { console.log("complete")}
    )
  }

  deleteConsumer(id: number) {
    const idAsString = id.toString();
    this.consumersService.deleteConsumer(idAsString).subscribe(
      (consumer) => { this.router.navigateByUrl('/consumers'); },
      (error) => { console.error(error) },
      () => {
        const filter = this.formFilter.value.filter;
        this.setSubscriber(filter);
      }
    );
  }



}
