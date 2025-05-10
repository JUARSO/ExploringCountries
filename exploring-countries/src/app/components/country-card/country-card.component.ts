import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../core/models/country';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../core/services/services/country.service';
import { CountryModalComponent } from '../country-modal/country-modal.component';
@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, CountryModalComponent],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent implements OnInit {

  @Input() countries: Country[] = []

  ngOnInit(): void {
  }

  selectedCountry: Country | null = null
  showModal: boolean = false

  openModal(country: Country) {
    console.log(country)
    this.selectedCountry = country
    this.showModal = true
  }

  closeModal() {
    this.showModal = false
  }

}
