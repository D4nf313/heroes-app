import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = environment.rickandmortyApi;
  private http = inject(HttpClient);

  getPersonajes(page: number = 1): Observable<any> {
    const url = `${this.baseUrl}/character?page=${page}`;
    return this.http.get<any>(url);
  }

}
