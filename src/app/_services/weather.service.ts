import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { weatherData } from '../_modals/weatherData'


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  id:string="&APPID=1e67450daf2bcc3c628e4f64ea96ddef"
  endPoint:string=`https://api.openweathermap.org/data/2.5/weather?q=`
  unit:string='&units=metric'

  
  constructor(private http:HttpClient) {
   }

  getWeather(city:string,u?:string){
    return this.http.get<weatherData>(this.endPoint+city+this.id+u)
  }
}
