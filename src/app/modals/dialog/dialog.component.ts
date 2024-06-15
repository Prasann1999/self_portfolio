import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  submitClickFlag:boolean = false;
  showValues:boolean = false;
  finalValues:any ={};
  supportForm= new FormGroup({
    user: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    msg :new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
  get userValidate(){
    return this.supportForm.get('user');
  }
  get msgValidate(){
    return this.supportForm.get('msg');
  }
  get phoneValidate(){
    return this.supportForm.get('phone');
  }
  get emailValidate(){
    return this.supportForm.get('email');
  }
  submitClick(){
    if(this.userValidate?.invalid || this.emailValidate?.invalid || this.msgValidate?.invalid|| this.phoneValidate?.invalid){
      console.log('validation failed');
      this.submitClickFlag = true;
    }else{
      this.finalValues = this.supportForm.value;
      this.showValues = true;
    }
  }
  editClick(){
    this.showValues = false;
  }
  supportClicked(){
    console.log('inside supportClicked',this.supportForm,this.supportForm.value)
  }
  close(): void {
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
  }

}
