// # .map
// ## Example 1:
// Given a list of countries, write a function that returns an array of strings with the country code and name

var countries = [
  {
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryCode": "AL",
    "countryName": "Albania",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryCode": "DZ",
    "countryName": "Algeria",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
]
function explainCodes(countries) {
  const explainedCodes = countries.map( (country) => {
    return `${country.countryCode} stands for ${country.countryName}`
  })
  return explainedCodes;
}
console.log(explainCodes(countries)) // => ["AF stands for Afghanistan","AL stands for Albania","DZ stands for Algeria"]

// ## Example 2:
// Write a function that takes the same list of countries, and returns an array of objects with just countryNames, capitals and continentNames.
function cleanCountryData(countries) {
  const cleanedCountryData = countries.map( (country) => {
    return {"countryName": country.countryName,
            "capital": country.capital,
            "continentName": country.continentName
    }
  })
  return cleanedCountryData;
}
console.log(cleanCountryData(countries))
/*
returns:
[
  {
    "countryName": "Afghanistan",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryName": "Albania",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryName": "Algeria",
    "capital": "Algiers",
    "continentName": "Africa"
  },
]
*/