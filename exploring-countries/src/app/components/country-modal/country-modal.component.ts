import { Component, Input } from '@angular/core';
import { Country } from '../../core/models/country';
import { EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * CountryModalComponent is a component that displays a modal with information about a country.
 * It is used to display the details of a country when a user clicks on a country in the search results.
 */

@Component({
  selector: 'app-country-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-modal.component.html',
  styleUrl: './country-modal.component.css'
})
export class CountryModalComponent {

  @Input() country!: Country 
  @Input() showModal: boolean = false
  @Output() closeModalClicked = new EventEmitter<void>()


  isVisible: boolean = false
  Object: any;

  closeModal() {
    this.closeModalClicked.emit()
    this.isVisible = false
  }

  
  openModal() {
    this.isVisible = true
  }

  /**
   * getCurrencies is a method that returns an array of objects with the name and symbol of the currencies of a country.
   * @param country - The country to get the currencies of.
   * @returns An array of objects with the name and symbol of the currencies of a country.
   */
  getCurrencies(country: Country): { name: string; symbol: string }[] {
    if (!country?.currencies) return [];
  
    return Object.keys(country.currencies).map(code => {
      const currency = country.currencies[code];
      return {
        name: currency.name,
        symbol: currency.symbol
      };
    });
  }

  
  /**
   * getLanguages is a method that returns an array of the languages of a country.
   * @param country - The country to get the languages of.
   * @returns An array of the languages of a country.
   */
  getLanguages(country: Country): string[] {
    if (!country?.languages) return [];
    return Object.values(country.languages);
  }




}
