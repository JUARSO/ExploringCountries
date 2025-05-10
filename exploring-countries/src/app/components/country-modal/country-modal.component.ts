import { Component, Input } from '@angular/core';
import { Country } from '../../core/models/country';
import { EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  getCurrencies(country: any): { name: string; symbol: string }[] {
    if (!country?.currencies) return [];
  
    return Object.keys(country.currencies).map(code => {
      const currency = country.currencies[code];
      return {
        name: currency.name,
        symbol: currency.symbol
      };
    });
  }

  getLanguages(country: any): string[] {
    if (!country?.languages) return [];
    return Object.values(country.languages);
  }




}
