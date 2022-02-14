import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  apiUrl = environment.apiUrl;


  constructor(
    private http: HttpClient
  ) { }

  getAnalysisTag(tagId: string, requestParam: any):  Observable<any> {
    const url = this.apiUrl + '/analysis/'+tagId;
    return this.http.get<any>(url, {params: requestParam})
  }

  getDashboard():  Observable<any> {
    const url = this.apiUrl + '/dashboard';
    return this.http.get<any>(url);
  }
}
