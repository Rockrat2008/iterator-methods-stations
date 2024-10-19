// # find()
// ## Example 1: -->
// Given an array of countries, write a function that returns the first listed country in North America

var countries = [
  {
      "countryCode": "AS",
      "countryName": "American Samoa",
      "population": "57881",
      "capital": "Pago Pago",
      "continentName": "Oceania"
  },
  {
    "countryCode": "AI",
    "countryName": "Anguilla",
    "population": "13254",
    "capital": "The Valley",
    "continentName": "North America"
  },
  {
      "countryCode": "AD",
      "countryName": "Andorra",
      "population": "84000",
      "capital": "Andorra la Vella",
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
      "countryCode": "SX",
      "countryName": "Sint Maarten",
      "population": "37429",
      "capital": "Philipsburg",
      "continentName": "North America"
  },
];
function findFirstNorthAmericanCountry(countries) {
  const firstCountry = countries.find( (country) => {
    if (country.continentName === "North America")
      return country;
  })
  return firstCountry;
}
console.log(findFirstNorthAmericanCountry(countries));
// => {
//     "countryCode": "AI",
//     "countryName": "Anguilla",
//     "population": "13254",
//     "capital": "The Valley",
//     "continentName": "North America"
// }

// ## Example 2:
// Given the previous array of countries, find the first country with a capital that has a three-word name
function findThreeNameCapital(countries) {
  const capital = countries.find( (country ) => {
    checkword = [];
    checkword = country.capital.split(' ');
    if (checkword.length > 2) {
      return country;
    }
  })
  return capital;
}

console.log(findThreeNameCapital(countries))

 // => {
//   "countryCode": "AD",
//   "countryName": "Andorra",
//   "population": "84000",
//   "capital": "Andorra la Vella",
//   "continentName": "Europe"
// }