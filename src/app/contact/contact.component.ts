import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  dininput:any = ''

  constructor() { }

  ngOnInit(): void {
    console.log(this.dinamycform()) 
  }

  Inputs:any = [
    "username",
    "password",
    "test"
  ]

  dinamycform(){
 
  
  this.Inputs =  this.Inputs.map((el:any)=>{
    return  el = new FormControl(); 

    });

    return this.Inputs
 
  }

  myname = new FormControl('');
  email = new FormControl('');
  text = new FormControl('');

   title:any = '';
  // style =  `1px solid  ${this.title}`
  typing(value:any){
    value.style.border = "1px solid green"
    console.log(value)
  }

  getdata(){
    console.log(this.myname.value, this.email.value ,  this.text.value, this.Inputs[0].value)
  }

  nwfield(){
     this.myname.setValue('1')
     this.email.setValue('2')
     this.text.setValue('3')
  }



 Login = new FormGroup({
   logins: new FormControl('asdas', [Validators.required,   Validators.pattern('[1-5]*')]),
   pass: new FormControl('asdas', [Validators.required, Validators.minLength(2)])
 })

 get logins(){
   return this.Login.get('logins')
 }

 getform(){
   console.log(this.Login.value)
 }

 seter(par:any){
  this.Login.patchValue({
    logins:par
  })
 }

}
