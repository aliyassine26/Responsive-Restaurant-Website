// Branches JavaScript

function spot() {
  clear();

  var name = document.getElementById("name");
  name.innerHTML = "Spot Choueifat";

  var address = document.getElementById("address");
  address.innerHTML = "Address: Chouaifet El Qoubbeh";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "tel:009615800719");
  phone.innerHTML = "Phone: +9615800719";

  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.3998264125075!2d35.48775841520841!3d33.8019936806747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1968ba9c65b7%3A0x366347abc1b5c313!2sThe%20Spot%20Choueifat!5e0!3m2!1sen!2slb!4v1605560332681!5m2!1sen!2slb"
  );
}

function verdun() {
  clear();

  var name = document.getElementById("name");
  name.innerHTML = "ABC Verdun";

  var address = document.getElementById("address");
  address.innerHTML = "Address: VERDUN, ABC MALL, LG FL BEIRUT RAS, Beirut";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "tel:009611791777");
  phone.innerHTML = "Phone: +9611791777";

  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.208667153747!2d35.48236151521057!3d33.884279380651975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1733dfc75de9%3A0x476797f46fd36374!2sABC%20Verdun!5e0!3m2!1sen!2slb!4v1605559123257!5m2!1sen!2slb"
  );
}

function achrafieh() {
  clear();

  var name = document.getElementById("name");
  name.innerHTML = "ABC Achrafieh";

  var address = document.getElementById("address");
  address.innerHTML =
    "Address: ABC, Alfred Naccache STR, Mar Mitr 2065, Beirut";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "tel:009611212888");
  phone.innerHTML = "Phone: +9611212888";

  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    " https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.040068846943!2d35.51793511521063!3d33.88862188065072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f170040580bdb%3A0x9986c4de8179cba7!2sABC%20Achrafieh!5e0!3m2!1sen!2slb!4v1605559734577!5m2!1sen!2slb"
  );
}

function citycenter() {
  clear();

  var name = document.getElementById("name");
  name.innerHTML = "City Center";

  var address = document.getElementById("address");
  address.innerHTML = "Address: Hazmiyeh, Beirut";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "tel:009611283666");
  phone.innerHTML = "Phone: +9611283666";

  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0792011439494!2d35.52738681521003!3d33.86184968065824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1798849fcae3%3A0xcb7cf8d31d35ce1!2sCity%20Centre%20Beirut!5e0!3m2!1sen!2slb!4v1605560244747!5m2!1sen!2slb"
  );
}

function lemall() {
  clear();

  var name = document.getElementById("name");
  name.innerHTML = "Le Mall Dbayeh";

  var address = document.getElementById("address");
  address.innerHTML = "Address: Dbayeh";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "tel:009614408111");
  phone.innerHTML = "Phone: +9614408111";

  var map = document.getElementById("map");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.444113860411!2d35.58692871521183!3d33.929703830639355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3e46eb6524cf%3A0x666318b93d2d53e6!2sLeMall!5e0!3m2!1sen!2slb!4v1605560667654!5m2!1sen!2slb"
  );
}

function clear() {
  var name = document.getElementById("name");
  name.innerHTML = "";

  var address = document.getElementById("address");
  address.innerHTML = "";

  var phone = document.getElementById("phone");
  phone.setAttribute("href", "");
  phone.innerHTML = "";

  var map = document.getElementById("map");
  map.setAttribute("src", "");
}
