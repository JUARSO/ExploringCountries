import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/services/services/country.service';    
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { Country } from '../../core/models/country';
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

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(countries => {
      console.log(countries)
      this.countries = countries.sort((a, b) => a.name.official.localeCompare(b.name.official))
    });
  }

  onSearchCountry(query: string) {
    this.countryService.getCountryByName(query).subscribe(countries => {
      this.countries = countries;
      this.countries.sort((a, b) => a.name.official.localeCompare(b.name.official))
    });
  }

}
