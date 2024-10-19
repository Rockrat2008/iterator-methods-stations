findThreeNameCapital(countries) {
    const capital = countries.find( (country ) => {
      checkword = [];
      checkword = country.capital.split();
      if (checkword.length > 2) {
        return country;
      }
    })
    return capital;
  }
  
  console.log(findThreeNameCapital(countries))