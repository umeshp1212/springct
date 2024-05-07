import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  private apiUrl = environment.url

  constructor(private http: HttpClient) {

   }

   login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/login`, {username, password}).pipe(
      tap( response => {
        localStorage.setItem('token', response.token)
      }, error => {
        
      })
    )
   }

   logout(): void {
    localStorage.removeItem('token')
   }

   getToken(): string | null {
    return localStorage.getItem('token')
   }

   isAuthenticated(): boolean {
    const token = this.getToken()
    return !!token;
   }
}
