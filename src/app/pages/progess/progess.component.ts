import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styleUrls: ['./progess.component.css']
})
export class ProgessComponent  {
progreso1:number=25;
progreso2:number=15;

get getProgreso1(){
 console.log(this.progreso1+"%")
  return this.progreso1+"%"
}

get getProgreso2(){
  return this.progreso2+"%"
}



prueba(even:number){
  this.progreso1=even;
  console.log( even+"%")
  console.log(this.progreso1+"%")
  this.progreso1+"%"
}
}
