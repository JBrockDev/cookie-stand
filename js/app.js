console.log("Initialized!");

const restaraunts = {
  restarauntsArray: [],
  addRestaraunt: null,
  removeRestaraunt: null
};

restaraunts.restarauntsArray = [
  {
    id: 1,
    location: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3,
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
    hourlySalesForTheDay: [],
    storeOpenHour: 6,
    storeCloseHour: 19
  },
  {
    id: 2,
    location: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2,
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
    hourlySalesForTheDay: [],
    storeOpenHour: 6,
    storeCloseHour: 19
  },
  {
    id: 3,
    location: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7,
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
    hourlySalesForTheDay: [],
    storeOpenHour: 6,
    storeCloseHour: 19
  },
  {
    id: 4,
    location: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3,
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
    hourlySalesForTheDay: [],
    storeOpenHour: 6,
    storeCloseHour: 19
  },
  {
    id: 5,
    location: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6,
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
    hourlySalesForTheDay: [],
    storeOpenHour: 6,
    storeCloseHour: 19
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
    restarauntDiv = document.createElement("div");
    restarauntDiv.id = restarauntsArray[i].id;
    locationData.appendChild(restarauntDiv);
    restarauntLocation = document.createElement("h3");
    restarauntLocation.textContent = restarauntsArray[i].location;
    restarauntDiv.appendChild(restarauntLocation);

    restaruantUL = document.createElement("ul");
    restarauntDiv.appendChild(restaruantUL);
    for (let j = 0; j < restarauntsArray[i].hourlySalesForTheDay.length; j++) {
      let currentHour = restarauntsArray[i].storeOpenHour + j;
      total += restarauntsArray[i].hourlySalesForTheDay[j];
      if (currentHour < 12) {
        currentHour = currentHour + "am";
      } else if (currentHour === 12) {
        currentHour = currentHour + "pm";
      } else {
        currentHour = (currentHour - 12) + "pm";
      }
      hourlyLI = document.createElement("li");
      hourlyLI.textContent = currentHour + ": " + restarauntsArray[i].hourlySalesForTheDay[j] + " cookies";
      restaruantUL.appendChild(hourlyLI);
    }
    let totalLI = document.createElement("li");
    totalLI.textContent = "Total: " + total;
    restaruantUL.appendChild(totalLI);
    console.log(restarauntsArray[i]);
  };
  

}

getDailySales();
renderSalesData();

restaraunts.restarauntsArray.forEach(x => {
  console.log(x);
});
