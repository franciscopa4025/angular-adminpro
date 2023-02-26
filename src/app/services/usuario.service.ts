import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../environment/environment';
import { LoginForm } from '../interfaces/Login-form.interface';
import { RegisterForm } from '../interfaces/Registers-form.interfaces';
const base_url=environment.BASE_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient,private router:Router) { }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login")
  }

  validarToken():Observable<boolean>{
    const token=localStorage.getItem("token")||"";
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(base_url+"/Medicos",{
     headers
    }).pipe(
      tap((resp:any)=>{
        localStorage.setItem("token",resp.token)
      }),
      map(resp=>true),
      catchError(error=>of(false))
    );
  }

  crearUsuario(formData:RegisterForm){

    return this.http.post(base_url+"/cuentas/crear",formData)
    .pipe(
      tap((resp:any)=>{
        localStorage.setItem("token",resp.token)
      })
    );
  }
  login(formData:LoginForm){

     return this.http.post(base_url+"/cuentas/Login",formData)
                  .pipe(
                    tap((resp:any)=>{
                      localStorage.setItem("token",resp.token)
                    })
                  );
   }
}
