import { CustomerService } from "./CustomerService";
import {renderDataTable} from "./RenderHelper"

export const App = () => {
    // const self = this;

   const  render=(customers, listHeader) => {
      const msg = document.getElementById("message");
      msg.removeAttribute("style");
      msg.setAttribute("style", "display:none");
      
      const tbl = document.getElementById("table");
      tbl.children && tbl.children.length>0 && tbl.removeChild(tbl.childNodes[0])
      renderDataTable(table, customers, listHeader)
      // tbl.appendChild()
    }

    return {
      run: () => {
        console.log(" App loading ...");
      },
      getAllCustomers: () => {
        const csSeverice = new CustomerService();
        return csSeverice.getCustomers();
      },
      loadData: (filters , headers)=> {
        const csSeverice = new CustomerService();
        csSeverice.loadCustomers( filters, headers, (customerList, headers) => {render(customerList, headers)})
      },
      searchData : (filter, headers)=> {
        const csSeverice = new CustomerService();
        csSeverice.searchCustomers( filter, headers, (customerList, headers) => {render(customerList, headers)})
      },
      // sort: (customers, sortByFields, isAscending) => {
      //   const csSeverice = new CustomerService();
      //   csSeverice.sortCustomers(customers, sortByFields, isAscending);
      //   const listHeader = ["name", "mobile", "credit", "email"];
      //   csSeverice.renderCustomers(listHeader, customers);
      // },
      // render:(customers, listHeader) => {
      //   // const csSeverice = new CustomerService();
      //   // const listHeader = ["name", "mobile", "credit", "email"];
      //   // csSeverice.renderCustomers(listHeader, csSeverice.getCustomers());  
      //   const msg = document.getElementById("message");
      //   msg.innerText = "";
      //   const tbl = document.getElementById("table");
      //   tbl.appendChild(RenderHelper.renderDataTable(customers, listHeader ))
      // },
    
      // Hlight matched content
      // E.g. If we expect customer's name contains "a"
      // the search result will looks like J<a>son, and a is rendered in red color
      // highlightMatchedFilter: filters => {
      //   const csSeverice = new CustomerService();
      //   csSeverice.highlightMatchedFilter(filters);
      // }
    };
  };