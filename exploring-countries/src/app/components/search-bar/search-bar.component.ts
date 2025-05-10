import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../core/services/services/country.service';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

/**
 * SearchBarComponent is a component that allows the user to search for a country.
 * It emits a searchCountry event with the search term when the user types in the search bar.
 * The search term is then used to search for a country in the CountryService.
 */


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  constructor(
    private countryService: CountryService,
    private router: Router
  ) {}

  @Output() searchCountry = new EventEmitter<string>();

  searchTerm: string = '';

  onSearchCountry(query: string) {
    this.searchCountry.emit(query);
  }
  

}


