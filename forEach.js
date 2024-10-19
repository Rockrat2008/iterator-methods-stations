// # .forEach
// Given a list of countries, write a function that returns an array of all the country codes using `.forEach`.

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
function getCodes(countries) {
  const countryCodes =[];
  countries.forEach( (country) => {
    countryCodes.push(country.countryCode);
  })
  return countryCodes;
}
console.log(getCodes(countries)) // => ["AF","AL","DZ"]