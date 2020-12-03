// Branches JavaScript

 // function actived when pressed on navigator bar icon
 function myFunction() {
  var x = document.getElementById("myTopnav");
  
  //changes class name to make navigation bar responsive
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


 // function actived when pressed on spot hyperlink
function spot() {

  //call function "clear()" to clear all info displayed
  clear();

  // add branch name, address, and phone number in suitable place
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  name.innerHTML = "Spot Choueifat";
  address.innerHTML = "Address: Chouaifet El Qoubbeh";
  phone.setAttribute("href", "tel:009615800719");
  phone.innerHTML = "Phone: +9615800719";
/* -------------------------------------------------------- */  

// changes map src to corresponding url 
  var map = document.getElementById("map");
  map.setAttribute(
    "src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.3998264125075!2d35.48775841520841!3d33.8019936806747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1968ba9c65b7%3A0x366347abc1b5c313!2sThe%20Spot%20Choueifat!5e0!3m2!1sen!2slb!4v1605560332681!5m2!1sen!2slb");
}



 // function actived when pressed on "ABC Verdun" hyperlink
function verdun() {
  
  //call function "clear()" to clear all info displayed
  clear();

   

  // add branch name, address, and phone number in suitable place
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  name.innerHTML = "ABC Verdun";
  address.innerHTML = "Address: VERDUN, ABC MALL, LG FL BEIRUT RAS, Beirut";
  phone.setAttribute("href", "tel:009611791777");
  phone.innerHTML = "Phone: +9611791777";
/* -------------------------------------------------------- */  

// changes map src to corresponding url 
  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.208667153747!2d35.48236151521057!3d33.884279380651975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1733dfc75de9%3A0x476797f46fd36374!2sABC%20Verdun!5e0!3m2!1sen!2slb!4v1605559123257!5m2!1sen!2slb"
  );
}



 // function actived when pressed on "ABC Achrafieh" hyperlink
function achrafieh() {
 
  //call function "clear()" to clear all info displayed
  clear();

   
  // add branch name, address, and phone number in suitable place
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  name.innerHTML = "ABC Achrafieh";
  address.innerHTML = "Address: ABC, Alfred Naccache STR, Mar Mitr 2065, Beirut";
  phone.setAttribute("href", "tel:009611212888");
  phone.innerHTML = "Phone: +9611212888";

/* -------------------------------------------------------- */  

// changes map src to corresponding url 
  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.040068846943!2d35.51793511521063!3d33.88862188065072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f170040580bdb%3A0x9986c4de8179cba7!2sABC%20Achrafieh!5e0!3m2!1sen!2slb!4v1605559734577!5m2!1sen!2slb"
  );
}



 // function actived when pressed on "city center" hyperlink
function citycenter() {

  //call function "clear()" to clear all info displayed
  clear();

  // add branch name, address, and phone number in suitable place
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  name.innerHTML = "City Center";
  address.innerHTML = "Address: Hazmiyeh, Beirut";
  phone.setAttribute("href", "tel:009611283666");
  phone.innerHTML = "Phone: +9611283666";

/* -------------------------------------------------------- */  

// changes map src to corresponding url 
  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0792011439494!2d35.52738681521003!3d33.86184968065824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1798849fcae3%3A0xcb7cf8d31d35ce1!2sCity%20Centre%20Beirut!5e0!3m2!1sen!2slb!4v1605560244747!5m2!1sen!2slb"
  );
}




 // function actived when pressed on "LE MALL" hyperlink
function lemall() {

  //call function "clear()" to clear all info displayed
  clear();

  
  // add branch name, address, and phone number in suitable place
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");

  name.innerHTML = "Le Mall Dbayeh";
  address.innerHTML = "Address: Dbayeh";
  phone.setAttribute("href", "tel:009614408111");
  phone.innerHTML = "Phone: +9614408111";
/* -------------------------------------------------------- */  

// changes map src to corresponding url 
  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.444113860411!2d35.58692871521183!3d33.929703830639355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3e46eb6524cf%3A0x666318b93d2d53e6!2sLeMall!5e0!3m2!1sen!2slb!4v1605560667654!5m2!1sen!2slb"
  );
}


  // function "clear()" clears all info displayed
  clear();
function clear() {

  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");
  var map = document.getElementById("map");

  name.innerHTML = "";
  address.innerHTML = "";
  phone.setAttribute("href", "");
  phone.innerHTML = "";
  map.setAttribute("src", "");
}
