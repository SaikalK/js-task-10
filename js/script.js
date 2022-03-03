class Restaurant {
    constructor(name, cusineType, serve) {
      this.name = name;
      this.cusineType = cusineType;
      this.serve = 0;
    }
  
    showInfo() {
      return `${this.name} is a restaurant of ${this.cusineType} meal.`;
    }
  
    // 0 - sun
    // 1 = mon
    // 2 = tue
    // 3 = wed
    // 4 = thu
    // 5 = fri
    // 6 = sat
  
    isOpen() {
      let currentHour = new Date().getHours();
      let currentDay = new Date().getDay();
  
      if (currentDay === 6 || currentDay === 0) {
        return `${this.name} is closed`;
      } else {
        if (currentHour > 9 && currentHour < 22) {
          return `${this.name} is open`;
        } else {
          return `${this.name} is closed`;
        }
      }
    }
    serve() {
    this.served++;
  };

  setServed(numberOfClient) {
  this.served += numberOfClient;
}

  showTotalServed() {
 this.served();
  }
}

  const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");

  console.log(beshBarmak);
  console.log(beshBarmak.isOpen());
  console.log(beshBarmak.showInfo());

  console.log(serve());
  console.log(setServed());
  console.log(showTotalServed());  