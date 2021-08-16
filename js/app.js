console.log("Initialized!");

const restaraunts = {
  restarauntsArray: [],
  addRestaraunt: null,
  removeRestaraunt: null
};

let restarauntsArray = [
  {
    id: 1,
    location: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3
  },
  {
    id: 2,
    location: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2
  },
  {
    id: 3,
    location: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7
  },
  {
    id: 4,
    location: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3
  },
  {
    id: 5,
    location: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6
  }
];

restaraunts.addRestaraunt = function(restaraunt) {
  if (restaraunt.location && restaraunt.minCustomers && restaraunt.maxCustomers && restaraunt.avgCookiesPerSale) {
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
