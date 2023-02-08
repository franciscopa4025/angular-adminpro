import { Component } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
 labels1:string[]=["ventas tacos","veta refresco","ventas agua"];
 labels2:string[]=["ventas al dia","ventas al mes","ventas al año"];
 labels3:string[]=["prueba","prueba 2","prueba 3"];
 labels4:string[]=["asas","asdafa","sofshfush"];
 public data1: ChartData<'doughnut'> = {
   labels: this.labels1,
   datasets: [
     { data: [ 350, 450, 100 ] }
   ]
 };

 public data2: ChartData<'doughnut'> = {
  labels: this.labels2,
  datasets: [
    { data: [ 50, 45, 100 ] }
  ]
};

public data3: ChartData<'doughnut'> = {
  labels: this.labels3,
  datasets: [
    { data: [ 35, 40, 10 ] }
  ]
};

public data4: ChartData<'doughnut'> = {
  labels: this.labels4,
  datasets: [
    { data: [ 250, 150, 400 ] }
  ]
};


}
