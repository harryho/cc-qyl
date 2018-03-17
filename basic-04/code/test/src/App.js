import {CustomerService} from './CustomerService'

export const App = () => {
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
        console.log(" App loading ... ",customerList);
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