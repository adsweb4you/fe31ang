import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template:`<h1> {{title}} </h1>`,
  // styles:['h1{color:green}'],
  // encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {

  constructor(){
  
  }

  title =  6665464;
  y = 2353;
  shows = false;

  mytext = 'bg-dark';
  textcolor = 'text-white';

  clasbg = {
    'text-danger':true,
    'rounded':true,
    'p-5':true,
    'd-none':false,
    'show':true
  }

  px =  '25px';

  styleobj  = {
     color: 'red', 
    'border-radius': this.px,
    'font-size': '15px',
    'text-transform': 'uppercase',
    
  }

  virable = true;

  changecl(evend:any){
    this.virable   = !this.virable;
    this.clasbg['show'] = !this.clasbg['show'];
  }

  lang = 'ens'

  parents = 'საწყისი მნიშვნელობა';

  changevals(nwval:string){
    console.log(nwval);
   return this.parents = nwval;
  }

  color = "assets/logo.png";


  Users = [
    "ნიკა",
    "ბესო",
    "ნოდარი",
    "დევი",
    "გიო"
  ]

 

 

  newitem(el:any){
 
    this.Users.unshift(el)
  }

  calcu(u:any){
   return u;
  }

  changecolor(col:any){
    this.color = col;
 
  }

  toggle(){
  this.shows = !this.shows
  }

}
