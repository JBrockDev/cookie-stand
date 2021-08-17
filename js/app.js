console.log("Initialized!");

const restaraunts = {
  restarauntsArray: [],
  addRestaraunt: null,
  removeRestaraunt: null
};

Restaraunt = function(locationCity, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour, isOpen) {
  this.locationCity = locationCity;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.storeOpenHour = storeOpenHour;
  this.storeCloseHour = storeCloseHour;
  this.isOpen = isOpen;
  this.hourlySalesForTheDay = [];
  Restaraunt.restaraunts.push(this);
}

Restaraunt.restaraunts = [];

Restaraunt.prototype.setLocationCity = function(locationCity) {
  if (typeof locationCity === "string") {
    this.locationCity = locationCity;
    return true;
  }
  return false;
}

Restaraunt.prototype.setMinCustomers = function(minCustomers) {
  if (typeof minCustomers === "number") {
    this.minCustomers = minCustomers;
    return true;
  }
  return false;
}

Restaraunt.prototype.setMaxCustomers = function(maxCustomers) {
  if (typeof maxCustomers === "number") {
    this.maxCustomers = maxCustomers;
    return true;
  }
  return false;
}

Restaraunt.prototype.setAvgCookiesPerSale = function(avgCookiesPerSale) {
  if (typeof avgCookiesPerSale === "number") {
    this.avgCookiesPerSale = avgCookiesPerSale;
    return true;
  }
  return false;
}

Restaraunt.prototype.setStoreOpenHour = function(storeOpenHour) {
  if (typeof storeOpenHour === "number") {
    this.storeOpenHour = storeOpenHour;
    return true;
  }
  return false;
}

Restaraunt.prototype.setStoreCloseHour = function(storeCloseHour) {
  if (typeof storeCloseHour === "number") {
    this.storeCloseHour = storeCloseHour;
    return true;
  }
  return false;
}

Restaraunt.prototype.setIsOpen = function(isOpen) {
  if (typeof isOpen === "boolean") {
    this.isOpen = isOpen;
    return true;
  }
  return false;
}

Restaraunt.prototype.getCustomersPerHour = function() {
  let min = this.minCustomers;
  let max = this.maxCustomers;
  min = Math.ceil(this.minCustomers);
  max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Restaraunt.prototype.getDailySales = function () {
  let cookiesSold = 0;
  let restaraunt = this;
  let numberOfHours = this.storeCloseHour - this.storeOpenHour;
    for (let i = 0; i < numberOfHours + 1; i++) {
      console.log(restaraunt.getCustomersPerHour());
      cookiesSold = restaraunt.getCustomersPerHour() * restaraunt.avgCookiesPerSale;
      cookiesSold = Math.round(cookiesSold);
      restaraunt.hourlySalesForTheDay.push(cookiesSold);
    }
}

Restaraunt.prototype.renderStore = function() {

}

const restaraunt1 = new Restaraunt("Seattle", 23, 65, 6.3, 6, 19, true);
restaraunt1.getDailySales();
console.log(restaraunt1);
restaraunt1.setIsOpen(false);
const restaraunt2 = new Restaraunt("Las Vegas", 23, 65, 6.3, 6, 19, true);
restaraunt2.getDailySales();
console.log(restaraunt2);



renderSalesData = function() {
  let locationData = document.getElementById("locationData");
  let restarauntDiv;
  let restaruantUL;
  let hourlyLI;
  let restarauntCity;
  let restarauntsArray = Restaraunt.restaraunts;

  for (let i = 0; i < restarauntsArray.length; i++) {
    let total = 0;
    let currentArray = restarauntsArray[i];
    restarauntDiv = document.createElement("div");
    restarauntDiv.id = currentArray.id;
    locationData.appendChild(restarauntDiv);
    restarauntCity = document.createElement("h2");
    restarauntCity.textContent = currentArray.locationCity;
    restarauntDiv.appendChild(restarauntCity);
    restaruantUL = document.createElement("ul");
    restarauntDiv.appendChild(restaruantUL);
    for (let j = 0; j < currentArray.hourlySalesForTheDay.length; j++) {
      let currentHour = currentArray.storeOpenHour + j;
      total += currentArray.hourlySalesForTheDay[j];
      if (currentHour < 12) {
        currentHour = currentHour + "am";
      } else if (currentHour === 12) {
        currentHour = currentHour + "pm";
      } else {
        currentHour = (currentHour - 12) + "pm";
      }
      hourlyLI = document.createElement("li");
      hourlyLI.textContent = currentHour + ": " + currentArray.hourlySalesForTheDay[j] + " cookies";
      restaruantUL.appendChild(hourlyLI);
    }
    let totalLI = document.createElement("li");
    totalLI.textContent = "Total: " + total + " cookies";
    restaruantUL.appendChild(totalLI);
  };
  

}

renderSalesData();

