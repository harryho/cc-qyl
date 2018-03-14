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

  // get Name= ()=>this.name;
}

class CustomerService {
  constructor() {
    // Initialize a list of customer
    this.customers = [
      new Customer("Mr", "John", "abc@john.com", "040370402", 536),
      new Customer("Mr", "Ming", "abc@john.com", "040370102", 436),
      new Customer("Mr", "Jason", "abc@john.com", "041171402", 936),
      new Customer("Ms", "Lyn", "abc@john.com", "04037002", 366),
      new Customer("Mrs", "Brown", "abc@john.com", "040370402", 236),
      new Customer("Mrs", "Brown", "abc@john.com", "040370402", 1636)
    ];
  }

  isNullOrEmpty = test =>
    test === undefined || test === null || test.trim().length === 0;

  capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  compare = (a, b) => {
    if (isNaN(a) && typeof a === "string") return a.localeCompare(b);
    else if (!isNaN(a)) return a - b;
  };

  sortCustomers = (list, sortByFields, isAscending) => {
    if (sortByFields)
      list.sort((a, b) => {
        let idx = 0;
        while (this.compare(a[sortByFields[idx]], b[sortByFields[idx]]) === 0) {
          idx++;
        }
        return isAscending
          ? this.compare(a[sortByFields[idx]], b[sortByFields[idx]])
          : this.compare(b[sortByFields[idx]], a[sortByFields[idx]]);
      });
  };
  getCustomers = () => this.customers;

  // TODO
  searchCustomers = filters => {
    if (filters) {
      return this.customers.filter(customer =>
        Object.keys(filters).every(
          key =>
            this.isNullOrEmpty(filters[key])
              ? true
              : customer[key].toLowerCase().includes(filters[key].toLowerCase())
        )
      );
    }
    return this.customers;
  };

  // TODO
  renderCustomers = (headers, customers) => {
    // TODO
    // Expect result
    // Title Name  Mobile       Email            Credit
    // Mr  | ABC  |   041235 |  abc@email.com | 23
    if (headers && customers) {
      let result = "";
      let head = "";
      const splitor = " | ";

      result += headers.map(head => this.capitalize(head)).join(splitor) + "\n";

      result += customers
        .map(cust => headers.map(h => cust[h]).join(splitor))
        .join("\n");

      console.log(result);
    }
  };

  //TODO
  highlightMatchedFilter = filters => {
    let result = "";

    const splitor = " | ";
    if (filters) {
      result +=
        Object.keys(filters)
          .map(head => this.capitalize(head))
          .join(splitor) + "\n";
      result += this.searchCustomers(filters).map(
        c =>
          Object.keys(filters)
            .map(key => {
              const val = c[key];
              var match = new RegExp(filters[key], "ig");
              const content = val.replace(
                match,
                "\x1b[31m" + filters[key] + "\x1b[31m\x1b[0m"
              );
              return content;
            })
            .join(splitor) + " \n"
      );
    }

    console.log(result.toString().replace(/,/g, ""));
  };
}

const App = () => {
  return {
    run: () => {
      console.log(" App loading ... ");
    },
    getAllCustomers: () => {
      const csSeverice = new CustomerService();
      return csSeverice.getCustomers();
    },
    search: filters => {
      const csSeverice = new CustomerService();
      const customerList = csSeverice.searchCustomers(filters);
      const listHeader = ["name", "mobile", "credit", "email", "mobile"];
      csSeverice.renderCustomers(listHeader, customerList);
    },
    sort: (customers, sortByFields, isAscending) => {
      const csSeverice = new CustomerService();
      csSeverice.sortCustomers(customers, sortByFields, isAscending);
      const listHeader = ["name", "mobile", "credit", "email"];
      csSeverice.renderCustomers(listHeader, customers);
    },
    render: () => {
      const csSeverice = new CustomerService();
      const listHeader = ["name", "mobile", "credit", "email"];
      csSeverice.renderCustomers(listHeader, csSeverice.getCustomers());
    },
    // Hlight matched content
    // E.g. If we expect customer's name contains "a"
    // the search result will looks like J<a>son, and a is rendered in red color
    highlightMatchedFilter: filters => {
      const csSeverice = new CustomerService();
      csSeverice.highlightMatchedFilter(filters);
    }
  };
};

(app => {
  app.run();

  console.log(" Render ... \n");
  app.render();

  console.log(" Search with filters ... \n");
  // TODO
  const filters = {
    name: "n",
    email: "b",
    mobile: "1"
  };
  app.search(filters);

  console.log(" Sort by descending... \n");

  sortByFields = ["name", "email", "credit"];
  isAscending = false;

  const customers = app.getAllCustomers();

  app.sort(customers, sortByFields, isAscending);

  console.log(" Highlight matched content ... \n");
  app.highlightMatchedFilter(filters);
})(App());
