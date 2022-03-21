import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

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

}
