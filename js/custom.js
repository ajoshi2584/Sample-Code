$( document ).ready(function() {
    $("#country_selector").countrySelect({
      defaultCountry: "us",
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      responsiveDropdown: true,
      preferredCountries: ['ca', 'gb', 'us']
    });
      
      AOS.init({
        duration: 1200,
      });
      
      
});
