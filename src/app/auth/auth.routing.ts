import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const router:Routes=[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
