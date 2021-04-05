import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'crm-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {


  @Input()
  field?: AbstractControl;

  @Input()
  errorMessages?: { [key: string]: string };


  constructor() { }

  ngOnInit(): void {
  }

  //errors: string[] = [];

  get errors() : string[] {

      return Object.keys(this.field?.errors as object)
      // .filter(key => {
      //   return this.field.errors[key]  !== undefined;
      // })
      .map((key) => {
        return this.errorMessages?.[key] ? this.errorMessages[key] : 'Il manque un message!' ;
      })

  }


  isError() : boolean {
    // return !!this.field && this.field.touched && !this.field.valid
    if (this.field && this.field.touched && !this.field.valid) {
      return true;
    }

    return false;
  }

}
