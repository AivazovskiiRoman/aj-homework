import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { headers } from '../headers/headers';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get(`${environment.apiUrl}/campaigns`, { headers })
      .pipe(catchError((error: any) => throwError(error.message)));
  }

  deleteItem(id: number) {
    return this.http
      .delete(`${environment.apiUrl}/campaigns/${id}`, { headers })
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
