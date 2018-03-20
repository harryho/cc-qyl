require("babel-polyfill");

console.log("\n Server launching .....");
// import {TableHelper} from "./RenderHelper"
import {App} from "./App"
import {RenderHelper} from "./RenderHelper"

(app => {
  app.run();

  console.log(" Render ... \n");
  const listHeader = ["title", "name", , "email","mobile", "credit"];
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

  const sortByFields = ["name", "email", "credit"];

  const isAscending = false;

  const customers = app.getAllCustomers();

  app.sort(customers, sortByFields, sortByFields);

  console.log(" Highlight matched content ... \n");
  app.highlightMatchedFilter(filters);

  const msg = document.getElementById("message");
  msg.innerText = "";
  const tbl = document.getElementById("table");
  tbl.appendChild(RenderHelper.renderDataTable(customers, listHeader ))

})(App());
