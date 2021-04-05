import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit {

  public consumerForm: FormGroup;
  //consumer?: Consumer;


  constructor(private consumersService : ConsumerService, private router: Router, private route: ActivatedRoute) {

    this.consumerForm = new FormGroup(
      {
        id: new FormControl(),
        civility: new FormControl('', [Validators.required]),
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])}
    );
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: Params) => {
        console.log(params.get('id'));
        const id = params.get('id');
        if (id) {
          this.consumersService.getConsumer(id).subscribe(
            (consumer) => {
              this.consumerForm.patchValue(consumer);
            },
            (error) => { console.log(error) },
            () => { }
          )
        }
      }
    )
  }

  onSubmit() {
    console.log('OnSubmit', this.consumerForm.value);
    const consumer: Consumer = this.consumerForm.value;
    if (consumer.id) {
      this.consumersService.updateConsumer(consumer).subscribe(
        (consumer) => { this.router.navigateByUrl('/consumers')},
        (error) => { console.log(error) },
        () => { }
      )
    } else {
      this.consumersService.addConsumer(consumer).subscribe(
        (consumer) => { this.router.navigateByUrl('/consumers')},
        (error) => { console.log(error) },
        () => { }
      )
    }
  }

  saveConsumer() {
    this.consumersService.addConsumer(this.consumerForm.value)
  }

  cancel() {
    this.router.navigateByUrl('/consumers');
  }





  // login
  // onSubmitLogin(): void {

  //   //const user = this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
  //   this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password)
  //   .subscribe(
  //     (user : User) => {  this.router.navigateByUrl('/home') },
  //     (error) =>{ alert('enlève tes moufles!') },
  //     () => { console.log('complete') }
  //   )
  // }

}
