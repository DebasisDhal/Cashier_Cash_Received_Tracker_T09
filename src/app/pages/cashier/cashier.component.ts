import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Cashier } from '../../model/master';

@Component({
  selector: 'app-cashier',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './cashier.component.html',
  styleUrl: './cashier.component.css'
})
export class CashierComponent {

  
  mService=inject(MasterService);

 
  objs: any;
  gridData: any;
  
  casherForm: FormGroup = new FormGroup({

   financialYearId: new FormControl(0,[Validators.required]),
   fromDate: new FormControl('',[Validators.required]),
   toDate: new FormControl('',[Validators.required]),
   btn_name: new FormControl('TRACKER'),
   businessAreaId: new FormControl("1")

});

onSaveUser(){
  this.objs = this.casherForm.value;
  this.objs.financialYearId = parseInt(this.objs.financialYearId);


  this.mService.saveCashier(this.objs).subscribe((res:Cashier)=>{
    this.gridData=res;
    console.log(res);
    
  })
}


  // Variable to track row visibility
  isRowVisible: boolean = true;

  // Function to toggle row visibility
  toggleRow(): void {
    this.isRowVisible = false;
   
  }
  close():void{
    this.isRowVisible = true
  }
}
