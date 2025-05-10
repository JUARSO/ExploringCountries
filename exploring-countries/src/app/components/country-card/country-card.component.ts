import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../core/models/country';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../core/services/services/country.service';
import { CountryModalComponent } from '../country-modal/country-modal.component';

/**
 * CountryCardComponent is a component that displays a card with information about a country.
 */

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

  /**
   * openModal is a method that opens the modal.
   * @param country - The country to display in the modal.
   */
  openModal(country: Country) {
    console.log(country)
    this.selectedCountry = country
    this.selectedCountry.borderCountries = this.getBordersCountries(country)
    this.showModal = true
  }

  /**
   * getBordersCountries is a method that returns an array of the names of the countries that share a border with the given country.
   * @param country - The country to get the borders of.
   * @returns An array of the names of the countries that share a border with the given country.
   */
  getBordersCountries(country: Country): string[] {
    if (country.borders) {
      return country.borders
        .map(border => this.countries.find(c => c.cca3 === border)?.name.common)
        .filter((c): c is string => c !== undefined);
    }
    return [];
  }
  

  closeModal() {
    this.showModal = false
  }

}
