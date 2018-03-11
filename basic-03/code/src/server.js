console.log("\n Server launching ...");

class Customer {
  // Includes name, title, email, mobile, credit ( int ) properties
  constructor(title, name, email, mobile, credit) {
    this.title = title;
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.credit = credit;
  }
}

class CustomerService {
  constructor() {
    // Initialize a list of customer
    this.customers = [
      new Customer("Mr", "John", "abc@john.com", "040370402", 36),
      new Customer("Mr", "Ming", "abc@john.com", "040370402", 36),
      new Customer("Mr", "Jason", "abc@john.com", "040370402", 36),
      new Customer("Ms", "Lyn", "abc@john.com", "040370402", 36),
      new Customer("Mrs", "Brown", "abc@john.com", "040370402", 36)
    ];
  }
  // method 1 getCustomers
  // Return all customres
  getCustomers = () => {
    return this.customers;
  };
  // TODO
  searchCustomers = () => {};

  // TODO
  renderCustomers = () => {
    // TODO
    // Expect result
    // Title Name  Mobile       Email            Credit
    // Mr  | ABC  |   041235 |  abc@email.com | 23
    let result = "";
    const splitor = " | ";
    for (var cust of this.customers) {
      result +=
        [cust.title, cust.name, cust.email, cust.mobile, cust.credit].join(
          splitor
        ) + "\n";
    }
    console.log(result);
  };
}

const App = () => {
  return {
    run: () => {
      console.log(" App loading ... ");
    },
    search: () => {},
    render: () => {
      csSeverice = new CustomerService();

      //TODO
      const listHeader = ["name", "mobile", "credit", "email"];
      csSeverice.renderCustomers(listHeader);

      // TODO
      const filters = {
        name: "a",
        email: "b",
        mobile: "1"
      };
      // TODO
      // Expect any customers whoes name contains the filter's
      // name, etc.
      const customerList = csSeverice.searchCustomers(filters);
      console.log(customerList);

      // TODO
      // highlight matched content
      // Expect fitler name contains "a"
      // J<highlight>a</highlight>son
    }
  };
};

(app => {
  app.run();

  app.render();
})(App());
