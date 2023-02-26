import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuariosService:UsuarioService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


    return  this.usuariosService.validarToken().pipe(
      tap(estaAutenticado=>{
        if(!estaAutenticado){
          this.router.navigateByUrl("/login")
        }
      })
    );
  }

}
