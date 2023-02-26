import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';

const router:Routes=[
    {path:"dashboard",component:PagesComponent,
    canActivate:[AuthGuard],
    children:[
      {path:"",component:DashboardComponent,data:{titulo:"Dashboard"}},
      {path:"progress",component:ProgessComponent,data:{titulo:"ProgressBar"}},
      {path:"grafica1",component:Grafica1Component,data:{titulo:"Grafica #1"}},
      {path:"account-settings",component:AccountSettingsComponent,data:{titulo:"DashboAjustes de cuenta"}},

      {path:"rxjs",component:RxjsComponent,data:{titulo:"RXJS"}},
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
