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
      }
    };
  };
