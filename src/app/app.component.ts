import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherTileComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyWeather';
}
