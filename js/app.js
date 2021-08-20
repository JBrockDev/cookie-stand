console.log("Initialized!");

let restarauntList = [
  ["Seattle", 23, 65, 6.3,null, null, true],
  ["Tokyo", 3, 24, 1.2, null, null, true],
  ["Dubai", 11, 38, 2.3, null, null, true],
  ["Paris", 20, 38, 2.3, 6, 19, true],
  ["Lima", 2, 16, 4.6, 6, 19, true]
];

const restaraunts = {
  restarauntsArray: [],
  addRestaraunt: null,
  removeRestaraunt: null
};

randomStoreHours = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Restaraunt = function(locationCity, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour, isOpen) {
  this.locationCity = locationCity;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  if (storeOpenHour) {
    this.storeOpenHour = storeOpenHour;
  } else {
    this.storeOpenHour =  randomStoreHours(4, 10);
  }
  if (storeCloseHour) {
    this.storeCloseHour = storeCloseHour;
  } else {
    this.storeCloseHour = randomStoreHours(17, 21);
  }
  if (Restaraunt.restaraunts) {
    this.id = Restaraunt.restaraunts.length;
  } else {
    this.id = 0;
  }
  this.isOpen = isOpen;
  this.hourlySalesForTheDay = [];
  Restaraunt.restaraunts.push(this);
}

Restaraunt.restaraunts = [];
Restaraunt.allHourlyTotals = [];

populateAllHourlyTotalsArray = function() {
  Restaraunt.allHourlyTotals = [];
  for (let i = 0; i < 24; i++) {
    Restaraunt.allHourlyTotals.push(0);
  }
}

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
  restaraunt.hourlySalesForTheDay = [];
  let numberOfHours = this.storeCloseHour - this.storeOpenHour;
  
    for (let i = 0; i < numberOfHours + 1; i++) {
      cookiesSold = restaraunt.getCustomersPerHour() * restaraunt.avgCookiesPerSale;
      cookiesSold = Math.round(cookiesSold);
      restaraunt.hourlySalesForTheDay.push(cookiesSold);
    }
}

Restaraunt.prototype.renderStore = function() {
  if (this.isOpen) {
    let table = document.getElementById("data");
    let tableRow = _createAndAppendElem("tr", table);
    let hourlySalesArray = this.hourlySalesForTheDay;
    let storeOpenHour = this.storeOpenHour;
    let storeCloseHour = this.storeCloseHour;
    let counter = 0;
    let total = 0;
    rowHead = _createAndAppendElem("td", tableRow, this.locationCity);
    for (let i = 0; i < 25; i++) {
      if (i === 24) {
        _createAndAppendElem("td", tableRow, total);
      } else if (i < storeOpenHour || i > storeCloseHour) {
        _createAndAppendElem("td", tableRow, "               ");
      } else {
        let cookiesSold = hourlySalesArray[counter];
        _createAndAppendElem("td", tableRow, cookiesSold);
        total += cookiesSold;
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
  let tHead = _createAndAppendElem("thead", table);
  let tableRow = _createAndAppendElem("tr", tHead);
  generateTableHead(tableRow);
  let tBody = _createAndAppendElem("tbody", table);
  tBody.id = "data";
}

generateTableHead = function(tableRow) {
  _createAndAppendElem("th", tableRow, "               "); // empty row first for the locations list with whitespace character for appearance before locations are rendered
  iterateThroughHoursOfDay(tableRow);
}

iterateThroughHoursOfDay = function(tableRow) {
  for (let i = 0; i < 25; i++) {
    let currentHour = i;
    let suffix = "pm";
    if (currentHour === 0) {
      currentHour = 12;
      suffix = "am";
    } else if (currentHour < 12) {
      suffix = "am"; 
    } else if (currentHour === 24) {
      currentHour = "Daily ";
      suffix = "Total";
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
  }
}

getAllHourlyTotals = function() {
  populateAllHourlyTotalsArray();
  let allHourlyTotals = Restaraunt.allHourlyTotals;
  let restaraunts = Restaraunt.restaraunts;
  for (let i = 0; i < restaraunts.length; i++) {
    let currentRestaraunt = restaraunts[i];
    let openHour = currentRestaraunt.storeOpenHour;
    let currentHourlySalesArray = currentRestaraunt.hourlySalesForTheDay;
    for (let j = 0; j < currentHourlySalesArray.length; j++) {
      allHourlyTotals[j + openHour] += currentHourlySalesArray[j];
    }
  }
}

populateAllHourlyArrays = function() {
  for (let i = 0; i < Restaraunt.restaraunts.length; i++) {
    Restaraunt.restaraunts[i].getDailySales();
  }
}

generateSalesTotalsFooter = function() {
  let exists = document.getElementById("tfoot");
  let table = document.getElementById("salesDataTable");
  let tFoot;
  if (exists !== null) {
    exists.remove();
    getAllHourlyTotals();
  }
  tFoot = _createAndAppendElem("tfoot", table);
  tFoot.id = "tfoot";
  let footerHead = _createAndAppendElem("tr", tFoot);
  _createAndAppendElem("th", footerHead, "Totals");
  let allTotalsArray = Restaraunt.allHourlyTotals;
  let total = 0;
  for (let i = 0; i < allTotalsArray.length; i++) {
    let cookiesSold = allTotalsArray[i];
    total += cookiesSold;
    _createAndAppendElem("th", footerHead, cookiesSold);
  }
  _createAndAppendElem("th", footerHead, total);
}

handleStoreSubmit = function(event) {
  //<!-- locationCity, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour, isOpen -->
  event.preventDefault();
  const target = event.target;
  let locationCity = target.locationCity.value;
  let minCustomers = target.minCustomers.value;
  minCustomers = parseInt(minCustomers);
  let maxCustomers = target.maxCustomers.value;
  maxCustomers = parseInt(maxCustomers);
  let avgCookiesPerSale = target.maxCustomers.value;
  avgCookiesPerSale = parseFloat(avgCookiesPerSale);
  let storeOpenHour = target.storeOpenHour.value;
  storeOpenHour = parseInt(storeOpenHour);
  let storeCloseHour = target.storeCloseHour.value;
  storeCloseHour = parseInt(storeCloseHour);
  let isOpen = target.isOpen.value;
  if (isOpen === "true") {
    isOpen = true;
  } else {
    isOpen = false;
  }
  let exists = checkIfExists(locationCity, true);
  let restaraunt;
  if (exists === false) {
    console.log(exists);
    restaraunt = new Restaraunt(locationCity, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour, isOpen);
    restaraunt.getDailySales();
    restaraunt.renderStore();
  } else {
      updateRestaraunt = exists;
      updateRestaraunt.setMinCustomers = minCustomers;
      updateRestaraunt.setMaxCustomers = maxCustomers;
      updateRestaraunt.setAvgCookiesPerSale = avgCookiesPerSale;
      updateRestaraunt.setStoreOpenHour = storeOpenHour;
      updateRestaraunt.setStoreCloseHour = storeCloseHour;
      updateRestaraunt.setIsOpen = isOpen;
      updateRestaraunt.getDailySales();
      let tbody = document.getElementById("data");
      let table = document.getElementById("salesDataTable");
      table.removeChild(tbody);
      let newTbody = _createAndAppendElem("tbody", table);
      newTbody.id = "data";
      generateAllCityData();
  }
  getAllHourlyTotals();
  generateSalesTotalsFooter();
  document.getElementById("addStoreLocationForm").reset();
}

handleLocationInput = function() {
  checkIfExists(this.value, false);
}

checkIfExists = function(locationCity, submit) {
  let restarauntArray = Restaraunt.restaraunts;
  for (let i = 0; i < restarauntArray.length; i++) {
    if (restarauntArray[i].locationCity === locationCity) {
      if (submit === false) {
        alert("This location already exists, submitting with the same name will cause an edit to the current location.");
      }
      return restarauntArray[i];
    }
  }
  return false;
}

renderData = function(generateNew) {
  populateAllHourlyTotalsArray();
  populateRestarauntArray();
  populateAllHourlyArrays();
  generateSalesDataTable();
  generateAllCityData();
  getAllHourlyTotals();
  generateSalesTotalsFooter();
}

const submitButton = document.getElementById("addStoreLocationForm");
submitButton.addEventListener('submit', handleStoreSubmit);
const locationInput = document.getElementById("locationCity");
locationInput.addEventListener('keyup', handleLocationInput);

renderData(true);

