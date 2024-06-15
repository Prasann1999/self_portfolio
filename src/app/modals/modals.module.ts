import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FilterComponent } from './filter/filter.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
  
    DialogComponent,
       FilterComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NgbDropdownModule,
    MatSelectModule ,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    DialogComponent,
  ],
})
export class ModalsModule { }
