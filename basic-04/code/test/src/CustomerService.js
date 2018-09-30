import { Customer } from './Customer'

export
  class CustomerService {
  constructor() {
    // Initialize a list of customer
    this.customers = [
      new Customer("Mr", "John", "abc@john.com", "040370402", 536),
      new Customer("Mr", "Ming", "abc@john.com", "040370102", 436),
      new Customer("Mr", "Jason", "abc@john.com", "041171402", 936),
      new Customer("Ms", "Lyn", "abc@john.com", "04037002", 366),
      new Customer("Mrs", "Brown", "zabc@john.com", "040370402", 236),
      new Customer("Mr", "Brown", "abc@john.com", "040370402", 1636)
    ];
  }

  isNullOrEmpty = test => test === undefined || test === null || test.trim().length === 0;


  capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

  compare = (a, b) => {
    if (isNaN(a) && typeof a === "string") return a.localeCompare(b);
    else if (!isNaN(a)) return a - b;
  };

  // sortCustomers = (list, sortByFields, isAscending) => {
  //   if (sortByFields)
  //     list.sort((a, b) => {
  //       let idx = 0;
  //       while (this.compare(a[sortByFields[idx]], b[sortByFields[idx]]) === 0) {
  //         idx++;
  //       }
  //       return isAscending
  //         ? this.compare(a[sortByFields[idx]], b[sortByFields[idx]])
  //         : this.compare(b[sortByFields[idx]], a[sortByFields[idx]]);
  //     });
  // };

  sortCustomers = (list, sortByFields, isAscending) => {
    // console.log(" before sort .. ", list);
    console.log(sortByFields)
    if (sortByFields) {
      list.sort((a, b) => {
        for (var field of sortByFields) {
          if (field && this.compare(a[field], b[field]) != 0)
            return isAscending
              ? this.compare(a[field], b[field])
              : this.compare(b[field], a[field])
        }

        // let field =
        //   sortByFields.find(element => this.compare(a[element], b[element]) !== 0);

        // if (field) {
        //   let result = this.compare(a[field], b[field])
        //   console.log(" result --- ", result)
        //   return result;// this.compare(a[element], b[element]);
        // }
        // else return 0;
      })
    }

    console.log(" after sort .. ", list);

  }

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



  // searchCustomers=(filters)=> {
  //   if (filters) {
  //     const customers =[]
  //     this.customers.map(cust => {
  //       let filteredOut = false
  //       for (var f of Object.keys(filters)) {
  //         if (!cust[f].toLowerCase().includes(filters[f].toLowerCase())){
  //           filteredOut = true
  //           break
  //         }
  //       }  
  //       if (!filteredOut) customers.push(cust)
  //     })
  //     return customers;
  //   } else return this.customers
  // }
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
