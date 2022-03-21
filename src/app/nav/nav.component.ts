import { Component, OnInit , Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

   @Input() logo = 'assets/Lays-Logo.png';
   @Output() users = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  passdat(value:string){
    
    this.users.emit('value');
 

  }
  showclas = false;

  showbar(){
   this.showclas = !this.showclas
  }

   
}
