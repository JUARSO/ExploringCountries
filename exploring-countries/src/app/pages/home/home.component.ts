import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/services/services/country.service';    
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { Country } from '../../core/models/country';

/**
 * HomeComponent is the main component for the home page.
 * It displays a list of countries and allows the user to search for a country.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'  

})
export class HomeComponent implements OnInit {

  constructor(private countryService: CountryService) {}

  countries: Country[] = []

  /**
   * ngOnInit is a method that is called when the component is initialized.
   * It fetches all the countries from the CountryService and sorts them by their official name.
   */
  ngOnInit() {
    this.countryService.getAllCountries().subscribe(countries => {
      console.log(countries)
      this.countries = countries.sort((a, b) => a.name.official.localeCompare(b.name.official))
    });
  }

  /**
   * onSearchCountry is a method that is called when the user searches for a country.
   * It fetches the countries from the CountryService that match the search query and sorts them by their official name.
   * @param query - The search query.
   */
  onSearchCountry(query: string) {
    this.countryService.getCountryByName(query).subscribe(countries => {
      this.countries = countries;
      this.countries.sort((a, b) => a.name.official.localeCompare(b.name.official))
    });
  }

}
