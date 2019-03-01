import { Component, OnInit, } from '@angular/core';
import { WeatherService } from '../_services'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:string;//getting name from input
  selectedValue:string ="metric"; //setting default unit metric:Celsius
  unit:string 

  description:string;
  temperature:number;
  country:string;
  icon:string
  cityName:string//for display of city name

  

  constructor(private weather:WeatherService) { }

  ngOnInit() {

  }
   weatherResult(){
    this.unit= "&units="+this.selectedValue;
     
    this.weather.getWeather(this.city,this.unit)
    .subscribe( 
      result => {
        this.description=result.weather[0].description;
        this.temperature=result.main.temp;
        this.country=result.sys.country;
        this.icon=result.weather[0].icon;
        this.cityName=result.name;
      })
  }



}
      
