import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
    host: {
        'class': 'custom-class-component_common'
    }
})
export class WeatherComponent implements OnInit {
    city: string = '';
    pin: string = '';
    weatherData: any = {};
    loader:boolean = false;
    astro: any = [];
    forecast: any = [];
    airquality: any = [];
    errorMessage: any;
    step = 0;
    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }
    setCity(data: any) {
        this.city = data;
        console.log('city::', data);
    }
    setPin(data: string) {
        this.pin = data;
        console.log('city::', data);
    }
    searchClicked() {
        this.loader = true;
        this.weatherData = false;
        console.log('searchClicked:: city:', this.city, 'pin:', this.pin);
        if (this.pin?.length > 0 && this.city?.length === 0) {
            this.weatherService.getCityByPincode(this.pin).subscribe((data) => {
                const cityName = data?.[0]?.PostOffice?.[0]?.Block;
                if (cityName) {
                    this.getWeather(cityName);
                }else{
                    this.alertService.changeAlertType(data?.[0]?.Message, 'danger');
                }
                console.log('pinData::', data, 'cityName::', cityName);
                this.loader = false;
            },
            (error) => {
                console.log('error::',error);
                this.loader = false;
            });
        } else if (this.city?.length > 0) {
            this.getWeather(this.city?.toLowerCase());
        } else {
            this.alertService.changeAlertType('Please enter city or pincode', 'danger');
        }
    }

    constructor(
        private weatherService: WeatherService,
        private alertService: AlertService,
    ) { }

    getWeather(city: string) {
        this.loader = true;
        this.weatherService.getWeatherByCity(city).subscribe((data) => {
            console.log('data::', data);
            this.weatherData = data;
            this.astro = this.objectToArray(data?.forecast?.forecastday?.[0]?.astro);
            this.forecast = this.objectToArray(data?.forecast?.forecastday?.[0]?.day);
            this.airquality = this.objectToArray(data?.forecast?.forecastday?.[0]?.day?.air_quality);
            setTimeout(()=>{
                this.loader = false;
            },2000)

        },
            (error) => {
                this.errorMessage = 'Error fetching weather data';
                if (error?.error?.error) {
                    this.alertService.changeAlertType(`${error?.error?.error?.code}:${error?.error?.error?.message}`, 'danger');
                }
                this.loader = false;
            });
    }
    formatDate(dateString: string): string {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Parse the input date string
        const date = new Date(dateString);

        // Extract date components
        const dayOfWeek = days[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        // Construct the formatted date string
        const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

        return formattedDate;
    }
    objectToArray(obj: any) {
        // Initialize an empty array to store the converted objects
        const result = [];

        // Iterate over the keys of the object
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) { // Check if the key belongs to the object itself, not its prototype
                // Construct an object with the key and its corresponding value
                const newObj = {
                    key: key,
                    val: obj[key]
                };
                // Push the new object to the result array
                if (typeof newObj?.val === 'number' || typeof newObj?.val === 'string') {
                    result.push(newObj);
                }
            }
        }

        return result;
    }
    ngOnInit(): void {
        // this.getWeather();
    }

}
