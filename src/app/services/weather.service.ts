import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '960b90d86d0741e09a682205241006';
  private apiUrl = `http://api.weatherapi.com/v1/forecast.json`;
  private pinUrl =  `https://api.postalpincode.in/pincode/`;
  // &q=Bhusawal&days=1&aqi=yes&alerts=yes

  constructor(
    private http: HttpClient
  ) { }

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=1&aqi=yes&alerts=yes`;
    return this.http.get(url);
  }
  getCityByPincode(pincode: string): Observable<any> {
    const url = `${this.pinUrl}${pincode}`;
    return this.http.get(url);
  }
}
