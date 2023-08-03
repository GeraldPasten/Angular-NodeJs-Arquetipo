import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {

  private urlApi = 'https://base-service-rest-database-crud-quarkus-rest-to-db.apps.cluster-lhckl.lhckl.sandbox1670.opentlc.com/perfil/perfiles';

  constructor(private http: HttpClient) { }

  public getData() : Observable<any> {
    return this.http.get<any>(this.urlApi)
  }
}
