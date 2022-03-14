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
  title =  6665464;
  y = 2353;
  shows = false;
  color = "assets/logo.png"

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
