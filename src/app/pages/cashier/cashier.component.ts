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

  // Variable to track row visibility
  
  BillManager: boolean = false;
  selectedRowIndex: number | null = null;
  
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

  this.BillManager = false;
 
  this.mService.saveCashier(this.objs).subscribe((res:Cashier)=>{
    this.gridData=res;
    console.log(res);

    
  })
}

  // Function to toggle row visibility
  toggleRow(): void {
    this.BillManager = false;
    //this.selectedRowIndex = 0;
  }
  close():void{
    this.BillManager = true;
    
  }
  

  // Toggle function to show or hide row details
  toggleDetails(index: number): void {
    this.selectedRowIndex = this.selectedRowIndex === index ? null : index;
  }
}
