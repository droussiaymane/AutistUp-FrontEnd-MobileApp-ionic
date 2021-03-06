import { Centre } from './../models/centre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  centreId:number=null;
  constructor(private http :HttpClient) { }

  getAllArticles(){
    return this.http.get<any[]>(`${environment.apiBack_url}/ville/getAll`);
  }

  getAllCentres(id:any){
    return this.http.get<Centre[]>(`${environment.apiBack_url}/ville/getAllCentres/`+id);
  }
  setCentreId(id:any){
    this.centreId=id;
  }
  getCentreId(){
    return this.centreId;
  }
}
