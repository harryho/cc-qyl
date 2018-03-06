import "babel-polyfill";

class Customer {
  constructor(title, firstName, lastName, email, mobile) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.email = email;
    this.mobile = mobile;
  }
}

class CustomerService {
  constructor() {
    this.customers = [
      new Customer("Mr", "John", "Smith", "xx@email.com", "1232454"),
      new Customer("Mr", "John", "Doe", "bb@email.com", "324233"),
      new Customer("Mr", "Jack", "William", "cc@email.com", "777222")
    ];
  }

  getCustomers() {
    return this.customers;
  }

  searchCustomers(filter) {
    // TODO

    return this.customers;
  }
}

class TableComponent {
  constructor() {}
  addTableHeader() {}
  addTableBody() {}
  toString() {}
}

const App = () => {
  console.log("Hello");
  const msg = document.getElementById("message");
  msg.innerText = "Customer List \n";

  const service = new CustomerService();
  const customers = service.getCustomers();

  console.log(customers);

  const customerList = customers.map(c =>
    [c.title, c.firstName, c.lastName, c.email, c.mobile].join(" ")
  );

  console.log(customerList);

  const customerListContent = customerList.reduce(
    (acc, val) => (acc += val + "\n"),
    ""
  );

  console.log(customerListContent);

  msg.innerText += customerListContent;
};

App();
