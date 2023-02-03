import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const router:Routes=[
    {path:"dashboard",component:PagesComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"progress",component:ProgessComponent},
      {path:"grafica1",component:Grafica1Component},
      {path:"",redirectTo:"/dashboard",pathMatch:"full"},
    ]
  
    },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
