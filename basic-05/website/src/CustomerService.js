import { Customer } from "./Customer";
import { DB } from "./DataBase";


export class CustomerService {
  constructor() {
    // Initialize a list of customer
    DB.getCustomers().then(data => {
      this.customers = data;
    });
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

  getCustomers() {
    return DB.getCustomers();
  }

  // TODO
  loadCustomers =( filters, headers, callback) => {
    const customers = this.getCustomers().then(data => {

      if (filters) {
        const list = data.filter(customer =>
          Object.keys(filters).every(
            key =>
              this.isNullOrEmpty(filters[key])
                ? true
                : customer[key]
                    .toLowerCase()
                    .includes(filters[key].toLowerCase())
          )
        );
        callback(list, headers);
      }
      else
        callback(data, headers);
    });
  };


  searchCustomers =( filters, headers, callback) => {

    const customers = this.getCustomers().then(data => {

      if (filters) {
        const list = data.filter(customer =>
          Object.keys(customer).some(
            key => customer[key]
                    .toString().toLowerCase()
                    .includes(filters.toLowerCase())
          )
        );
        callback(list, headers);
      }
      else
        callback(data, headers);
    });
  };

  // TODO
  renderCustomers = (headers, customers) => {
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
