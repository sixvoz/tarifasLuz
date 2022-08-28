import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreciosModelo } from '../models/precios-modelo';

@Injectable({
  providedIn: 'root'
})
export class LeeApiService {

  private lecturaLuz: PreciosModelo = { date: "", hour: "", is_cheap: true, is_under_avg:false, price:0,units:"",market:"" };

  constructor(private ClienteHttp:HttpClient) { }

  public get(url:string): Observable<PreciosModelo>{


    return this.ClienteHttp.get<PreciosModelo>(url);

  }

}
