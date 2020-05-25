
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      return knex('location').insert([
        {
          locationName:"Arusha"
        },
        {
          locationName:"Accra"
        },
        {
          locationName:"Abuja"
        },
        {
          locationName:"Bulawayo"
        },
        {
          locationName:"Bauchi"
        },
        {
          locationName:"Kumasi"
        },
        {
          locationName:"Dar salam"
        },
        {
          locationName:"Owerri"
        },
        {
          locationName:"Yaounde"
        },
        {
          locationName:"Kigali"
        },
        {
          locationName:"Juba"
        },
        {
          locationName:"Kitale"
        },
        {
          locationName:"Liwonde"
        },
        {
          locationName:"Mitundu"
        },
        {
          locationName:"Mombasa"
        },
        {
          locationName:"Namwera"
        },
        {
          locationName:"Owino"
        },
        {
          locationName:"Phalombe"
        },
        {
          locationName:"Rubavu"
        },
        {
          locationName:"Songea"
        },
        {
          locationName:"Uvira"
        },
        {
          locationName:"Tabora"
        },
        {
          locationName:"Tororo"
        },
        {
          locationName:"Yei"
        },
        
      ]);
    
};
