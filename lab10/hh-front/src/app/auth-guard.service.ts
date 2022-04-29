import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LabService } from 'src/app/services/lab.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private authService: LabService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isExpiredToken(null)) {
      return true;
    } else {
      localStorage.removeItem('token');
      alert('you must log in to view this page');

      // location.reload();
    }

    this.router.navigate(['/login']);
    return true;
  }
}
