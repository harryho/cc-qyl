require("babel-polyfill");

console.log("\n Server launching .....");
// import {TableHelper} from "./RenderHelper"
import {App} from "./App"
// import {RenderHelper} from "./RenderHelper"
import { listeners } from "process/browser";
import {debounce} from "lodash"

(app => {
  app.run();

  console.log(" Render ...\n");
  const listHeader = ["title", "name", , "email","mobile", "credit"];

  console.log(" Search with filters ...\n");


  const sorts=[{ column: "name", direction: "desc"}]
  
  app.loadData(null, listHeader);

  const filter= document.getElementById("filter");

  filter.onkeydown = debounce(function(e){
    console.log(e.target.value)
      app.searchData(e.target.value, listHeader);
  }, 200);

  
})(App());
