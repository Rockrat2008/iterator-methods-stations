// # .reduce
// Given an array of numbers, write a function that returns the product of all the numbers.
var numbers = [1,2,5,7]
function getProduct(numbersObj) {
  const product = numbersObj.reduce( (acc, number) => {
    acc = acc * number;
    return acc;
  })
  return product;
}
console.log(getProduct(numbers)) // => 70


// Given a list of countries, write a function that returns a new object where the keys are country names and their values are an object containing the rest of the country's data.
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
function organizeByCountry(countries) {
  const organizedCountries = countries.reduce((acc, country) => {
    // Explictly assigns countryName and ...rest is the rest of the object
    const { countryName, ...rest} = country; 
    acc[countryName] = rest;
    return acc;
  }, {})
  return organizedCountries;
}
console.log(organizeByCountry(countries))
/*
output:
{
  Afghanistan: {
    "countryCode": "AF",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  Albania: {
    "countryCode": "AL",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  Algeria: {
    "countryCode": "DZ",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
}
*/