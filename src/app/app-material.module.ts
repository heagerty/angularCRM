import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



const importExport = [ MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatTooltipModule, MatIconModule ];


@NgModule({
  declarations: [],
  imports: importExport,
  exports: importExport,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppMaterialModule { }
