console.log("\n Server launching ...");
import{Customer} from './Customer';
import CustomerService from './CustomerService';
import{App} from './App'


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

const  sortByFields = ["name", "email", "credit"];
const  isAscending = false;

  const customers = app.getAllCustomers();

  app.sort(customers, sortByFields, isAscending);

  console.log(" Highlight matched content ... \n");
  app.highlightMatchedFilter(filters);
})(App());
