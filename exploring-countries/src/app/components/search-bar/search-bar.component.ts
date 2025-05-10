import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../core/services/services/country.service';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

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


