console.log("Initialized!");

const restaraunts = {
  restarauntsArray: [],
  addRestaraunt: null,
  removeRestaraunt: null
};

Restaraunt = function(locationCity, minCustomers, maxCustomers, avgCookiesPerSale, storeOpenHour, storeCloseHour) {
  this.locationCity = locationCity;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.storeOpenHour = storeOpenHour;
  this.storeCloseHour = storeCloseHour;
  this.getRandomCustomersForHour = _getCustomerPerHourFunction;
  this.setLocationCity = _setLocationCity;
  this.setMinCustomers = _setMinCustomers;
  this.setMaxCustomers = _setMaxCustomers;
}

_setLocationCity = function(locationCity, restaraunt) {
  if (typeof locationCity === "string") {
    restaraunt.locationCity = locationCity;
    return true;
  }
  return false;
}

_setMinCustomers = function(minCustomers, restaraunt) {
  if (typeof minCustomers === "number") {
    restaraunt.minCustomers = minCustomers;
    return true;
  }
  return false;
}

_setMaxCustomers = function(maxCustomers, restaraunt) {
  if (typeof maxCustomers === "number") {
    restaraunt.maxCustomers = maxCustomers;
    return true;
  }
  return false;
}

_getCustomerPerHourFunction = function() {
  getRandomCustomersForHour = function() {
    let min, max;
    min = Math.ceil(this.minCustomers);
    max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return getRandomCustomersForHour;
}

const restaraunt1 = new Restaraunt("Seattle", 23, 65, 6.3, 6, 19);
console.log(restaraunt1);
restaraunt1.setLocationCity("Las Vegas", restaraunt1);
console.log(restaraunt1);
restaraunt1.setMinCustomers(29, restaraunt1);
console.log(restaraunt1);
restaraunt1.setMaxCustomers(105, restaraunt1);
console.log(restaraunt1);

restaraunts.restarauntsArray = [
  {
    id: 1,
    location: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3,
    storeOpenHour: 6,
    storeCloseHour: 19,
    hourlySalesForTheDay: [],
    setLocationValue: function(location) {
      this.location = location;
    },
    setMinCustomersValue: function(minCustomers) {
      this.minCustomers = minCustomers;
    },
    setMaxCustomersValue: function(maxCustomers) {
      this.maxCustomers = maxCustomers;
    },
    setAvgCookiesPerSaleValue: function(avgCookiesPerSale) {
      this.avgCookiesPerSale = avgCookiesPerSale;
    },
    getRandomCustomersForHour: function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  {
    id: 2,
    location: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2,
    storeOpenHour: 6,
    storeCloseHour: 19,
    hourlySalesForTheDay: [],
    setLocationValue: function(location) {
      this.location = location;
    },
    setMinCustomersValue: function(minCustomers) {
      this.minCustomers = minCustomers;
    },
    setMaxCustomersValue: function(maxCustomers) {
      this.maxCustomers = maxCustomers;
    },
    setAvgCookiesPerSaleValue: function(avgCookiesPerSale) {
      this.avgCookiesPerSale = avgCookiesPerSale;
    },
    getRandomCustomersForHour: function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  {
    id: 3,
    location: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7,
    storeOpenHour: 6,
    storeCloseHour: 19,
    hourlySalesForTheDay: [],
    setLocationValue: function(location) {
      this.location = location;
    },
    setMinCustomersValue: function(minCustomers) {
      this.minCustomers = minCustomers;
    },
    setMaxCustomersValue: function(maxCustomers) {
      this.maxCustomers = maxCustomers;
    },
    setAvgCookiesPerSaleValue: function(avgCookiesPerSale) {
      this.avgCookiesPerSale = avgCookiesPerSale;
    },
    getRandomCustomersForHour: function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  {
    id: 4,
    location: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3,
    
    storeOpenHour: 6,
    storeCloseHour: 19,
    hourlySalesForTheDay: [],
    setLocationValue: function(location) {
      this.location = location;
    },
    setMinCustomersValue: function(minCustomers) {
      this.minCustomers = minCustomers;
    },
    setMaxCustomersValue: function(maxCustomers) {
      this.maxCustomers = maxCustomers;
    },
    setAvgCookiesPerSaleValue: function(avgCookiesPerSale) {
      this.avgCookiesPerSale = avgCookiesPerSale;
    },
    getRandomCustomersForHour: function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  {
    id: 5,
    location: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6,
    storeOpenHour: 6,
    storeCloseHour: 19,
    hourlySalesForTheDay: [],
    setLocationValue: function(location) {
      this.location = location;
    },
    setMinCustomersValue: function(minCustomers) {
      this.minCustomers = minCustomers;
    },
    setMaxCustomersValue: function(maxCustomers) {
      this.maxCustomers = maxCustomers;
    },
    setAvgCookiesPerSaleValue: function(avgCookiesPerSale) {
      this.avgCookiesPerSale = avgCookiesPerSale;
    },
    getRandomCustomersForHour: function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
];

restaraunts.addRestaraunt = function(restaraunt) {
  if (restaraunt.location && restaraunt.minCustomers && restaraunt.maxCustomers && restaraunt.avgCookiesPerSale && hourlySalesForTheDay) {
    this.setLocationValue = function(location) { this.location = location; };
    this.setMinCustomersValue = function(minCustomers) { this.minCustomers = minCustomers; };
    this.setMaxCustomersValue = function(maxCustomers) { this.maxCustomers = maxCustomers; };
    this.setAvgCookiesPerSaleValue = function(avgCookiesPerSale) { this.avgCookiesPerSale = avgCookiesPerSale; };
    this.getRandomCustomersForHour = function() {
      let min, max;
      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    this.restarauntsArray.push(restaraunt);
    console.log("Added restaraunt: " + restaraunt.location);
  } else {
    console.log("Error adding restaraunt.");
  }
}

restaraunts.removeRestaraunt = function(id) {
  restarauntsArray = this.restarauntsArray;
  for (let i = 0; i < restarauntsArray.length; i++) {
    restarauntsArray.splice(i, 1);
    console.log("Removed restaraunt: Store#" + id);
  }
}

getDailySales = function() {
  let cookiesSold = 0;
  let restaraunt;
  let restarauntsArray = restaraunts.restarauntsArray;
  for (let i = 0; i < restarauntsArray.length; i++) {
    restaraunt = restarauntsArray[i];
    for (let j = 0; j < 14; j++) {
      cookiesSold = restaraunt.getRandomCustomersForHour() * restaraunt.avgCookiesPerSale;
      cookiesSold = Math.round(cookiesSold);
      restaraunt.hourlySalesForTheDay.push(cookiesSold);
    }
  }
}

renderSalesData = function() {
  let locationData = document.getElementById("locationData");
  let restarauntDiv;
  let restaruantUL;
  let hourlyLI;
  let restarauntLocation;
  let restarauntsArray = restaraunts.restarauntsArray;

  for (let i = 0; i < restarauntsArray.length; i++) {
    let total = 0;
    let currentArray = restarauntsArray[i];
    restarauntDiv = document.createElement("div");
    restarauntDiv.id = currentArray.id;
    locationData.appendChild(restarauntDiv);
    restarauntLocation = document.createElement("h2");
    restarauntLocation.textContent = currentArray.location;
    restarauntDiv.appendChild(restarauntLocation);
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

getDailySales();
renderSalesData();

