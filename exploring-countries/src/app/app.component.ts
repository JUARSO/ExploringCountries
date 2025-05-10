import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryModalComponent } from './components/country-modal/country-modal.component';
@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, SearchBarComponent, CountryCardComponent, CountryModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exploring-countries';
}
