import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.url

  constructor(private http: HttpClient) {

   }


   getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`, httpOptions)
   }

   checkout(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${id}`, httpOptions)
   }

  //  login(username: string, password: string): Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/auth/login`, {username, password}).pipe(
  //     tap( response => {
  //       localStorage.setItem('token', response.token)
  //     }, error => {
        
  //     })
  //   )
  //  }

   


}
