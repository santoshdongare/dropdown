import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dropdown';
  constructor(private auth:AuthService){}
  ngOnInit(){
  
    this.state=this.auth.state();
     console.log(this.state)
  }
  state:any=[];
  city:any=[];

   onSelect(state:any){
        console.log(state.target.value)
   this.city=this.auth.city().filter(e=> e.id== state.target.value);
  }
  
  

}
