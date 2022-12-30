import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmdRoutingModule } from './cmd-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    MatDialogModule,
    CmdRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    CommonModule,
    CmdRoutingModule,
    FormsModule,
    SharedModule,

    
  ]
})
export class CmdModule { }
