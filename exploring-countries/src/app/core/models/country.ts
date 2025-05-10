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
  
  export interface CountryFlag {
    png: string
    svg: string
    alt?: string
  }

  export interface CountryLanguages {
    [key: string]: string
  }

  export interface CountryCurrencies {
    [key: string]: {
      name: string
      symbol: string
    }
  }

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
    borderCountries?: Country[]
  }
 
  