import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formSubmitted = false;

  loginForm: FormGroup;


  constructor(private router:Router,private fb:FormBuilder,private usuarioService:UsuarioService){
    this.loginForm = this.fb.group({
    email: [localStorage.getItem("email")||'', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });}


  login(){


    const mandar=this.loginForm.value
    delete mandar.remember

console.log(this.loginForm.value)
    this.usuarioService.login(this.loginForm.value).subscribe(resp=>{

      if(this.loginForm.get("remember")?.value){
        localStorage.setItem("email",this.loginForm.get("email")?.value);
      }else{
        localStorage.removeItem("email");
      }
      this.router.navigateByUrl("/");
      console.log(resp)
    },(err=>{
      Swal.fire("Error",err.error,"error");
    }))

  }
}
