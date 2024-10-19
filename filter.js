// .filter
// Example 1:
// Given an array of countries, write a function that returns an array of all Asian countries.

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
      "population": "29869520",
      "capital": "Tirana",
      "continentName": "Europe"
  },
  {
      "countryCode": "AO",
      "countryName": "Angola",
      "population": "13068161",
      "capital": "Luanda",
      "continentName": "Africa"
  },
  {
      "countryCode": "AI",
      "countryName": "Anguilla",
      "population": "13254",
      "capital": "The Valley",
      "continentName": "North America"
  },
  {
      "countryCode": "AM",
      "countryName": "Armenia",
      "population": "29680000",
      "capital": "Yerevan",
      "continentName": "Asia"
  },
]
function filterAsianCountries(countries) {
    const filteredCountries = countries.filter( (country) => {
        if (country.continentName === "Asia") {
            return country
        }
    })
    return filteredCountries;
}
console.log(filterAsianCountries(countries))
/*
returns:
[
{
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
},
{
    "countryCode": "AM",
    "countryName": "Armenia",
    "population": "2968000",
    "capital": "Yerevan",
    "continentName": "Asia"
},
]
*/

// ## Example 2:
// Given the same list of countries, find all countries with a population greater than 1,500,000.
function filterBigCountries(countries) {
    const bigCountries = countries.filter( (country ) => {
        if (country.population > 1500000) {
            return country;
        }
    })
    return bigCountries;
}
console.log(filterBigCountries(countries))
// returns:
// [
//   {
//       "countryCode": "AF",
//       "countryName": "Afghanistan",
//       "population": "29121286",
//       "capital": "Kabul",
//       "continentName": "Asia"
//   },
//   {
//       "countryCode": "AL",
//       "countryName": "Albania",
//       "population": "29869520",
//       "capital": "Tirana",
//       "continentName": "Europe"
//   },
//   {
//       "countryCode": "AO",
//       "countryName": "Angola",
//       "population": "13068161",
//       "capital": "Luanda",
//       "continentName": "Africa"
//   },
//   {
//       "countryCode": "AM",
//       "countryName": "Armenia",
//       "population": "29680000",
//       "capital": "Yerevan",
//       "continentName": "Asia"
//   },
// ]
