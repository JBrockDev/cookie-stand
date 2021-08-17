console.log("Initialized!");

let restarauntList = [
  ["Seattle", 23, 65, 6.3, 6, 19, true],
  ["Tokyo", 3, 24, 1.2, 4, 17, true],
  ["Dubai", 11, 38, 2.3, 10, 23, true],
  ["Paris", 20, 38, 2.3, 6, 19, true],
  ["Lima", 2, 16, 4.6, 2, 15, true]
];

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
      cookiesSold = restaraunt.getCustomersPerHour() * restaraunt.avgCookiesPerSale;
      cookiesSold = Math.round(cookiesSold);
      restaraunt.hourlySalesForTheDay.push(cookiesSold);
    }
}

Restaraunt.prototype.renderStore = function() {
  console.log(this);
  this.getDailySales();
  if (this.isOpen) {
    let table = document.getElementById("salesDataTable");
    let tableRow = _createAndAppendElem("tr", table);
    let hourlySalesArray = this.hourlySalesForTheDay;
    let storeOpenHour = this.storeOpenHour;
    let counter = 0;
    rowHead = _createAndAppendElem("td", tableRow, this.locationCity);

    for (let i = 0; i < 24; i++) {
      if (i < storeOpenHour) {
        _createAndAppendElem("td", tableRow, "               ");
      } else {
        let cookiesSold = hourlySalesArray[counter];
        _createAndAppendElem("td", tableRow, cookiesSold);
        counter++;
      }
    }
  }
}





_createAndAppendElem = function(elementType, parent, textContent) {
  let newElement = document.createElement(elementType);
  if (textContent) {
    newElement.textContent = textContent;
  }
  parent.appendChild(newElement);
  return newElement;
}

generateSalesDataTable = function() {
  let locationDataSection = document.getElementById("locationData");
  let table = _createAndAppendElem("table", locationDataSection);
  table.id = "salesDataTable";
  let tableRow = _createAndAppendElem("tr", table);
  generateTableHead(tableRow);
  generateAllCityData();
}

generateTableHead = function(tableRow) {
  
  _createAndAppendElem("th", tableRow, "               "); // empty row first for the locations list with whitespace character for appearance before locations are rendered
  for (let i = 0; i < 24; i++) {
    let currentHour = i;
    let suffix = "pm";
    if (currentHour === 0) {
      currentHour = 12;
      suffix = "am";
    } else if (currentHour < 12) {
      suffix = "am";
    } else if (currentHour > 12) {
      currentHour -= 12;
    }
    _createAndAppendElem("th", tableRow, currentHour + suffix);
  }
}

generateAllCityData = function() {
  let restarauntArray = Restaraunt.restaraunts;
  for (let i = 0; i < restarauntArray.length; i++) {
    restarauntArray[i].renderStore();
  }
}

populateRestarauntArray = function() {
  for (let i = 0; i < restarauntList.length; i++) {
    let currentRestaraunt = restarauntList[i];
    let cityLocation = currentRestaraunt[0];
    let minCustomers = currentRestaraunt[1];
    let maxCustomers = currentRestaraunt[2];
    let avgCookiesPerSale = currentRestaraunt[3];
    let storeOpenHour = currentRestaraunt[4];
    let storeCloseHour = currentRestaraunt[5];
    let isOpen = currentRestaraunt[6];
    const restaraunt = new Restaraunt(cityLocation, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour, isOpen);
    Restaraunt.restaraunts.push(restaraunt);
  }
}

populateRestarauntArray();
generateSalesDataTable();



