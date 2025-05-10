
/**
 * CountryName is an interface that represents the name of a country.
 */
export interface CountryName {
    common: string
    official: string
    nativeName?: {
      [lang: string]: {
        official: string
        common: string
      }
    }
  }
  
  /**
   * CountryFlag is an interface that represents the flag of a country.
   */
  export interface CountryFlag {
    png: string
    svg: string
    alt?: string
  }

  /**
   * CountryLanguages is an interface that represents the languages of a country.
   */
  export interface CountryLanguages {
    [key: string]: string
  }

  /**
   * CountryCurrencies is an interface that represents the currencies of a country.
   */
  export interface CountryCurrencies {
    [key: string]: {
      name: string
      symbol: string
    }
  }

  /**
   * Country is an interface that represents a country.
   */
  export interface Country {
    name: CountryName
    flags: CountryFlag
    region: string
    population: number
    cca3: string
    capital: string[]
    subregion: string
    languages: CountryLanguages
    currencies: CountryCurrencies
    borders: string[]
    borderCountries?: string[]
  }
 
  