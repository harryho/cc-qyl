import { CustomerService } from "./CustomerService";

const createTable = () => {
  const t = document.createElement("table");
  t.setAttribute(
    "style",
    "border: 1px solid #000; font-family: arial; width:60%;"
  );
  return t;
};

const createTableHeader = () => {
  const thead = document.createElement("thead");
  thead.setAttribute("style", "color: hotpink");
  return thead;
};

const createTableHeaderCell = () => document.createElement("th");
const createTableBody = () => {
  const tbody = document.createElement("tbody");
  tbody.setAttribute("style", "color: #5e5a5a");
  return tbody;
};
const createTableRow = () => document.createElement("tr");

const createTableData = () => {
  const td = document.createElement("td");
  td.setAttribute("style", "border: 1px solid #b5b0b0 ;");
  return td;
};


export function sortTable(container, data, headers, sortingHeader) {
  console.log("sorting ...");
  const sc = new CustomerService();
  const sorting = document.getElementById(sortingHeader);
  let sortedData = [];
  if (!sorting || sorting.innerText === "arrow_upward") {
   sc.sortCustomers(data, [sortingHeader], true);
  } else sc.sortCustomers(data, [sortingHeader], false);

  renderDataTable(container, data, headers, sortingHeader);
}
// sortingHeader
export function renderDataTable(container, data, headers, sortingHeader) {
  const table = createTable();
  const sc= new CustomerService()
  if (headers) {
    const thead = createTableHeader();
    table.appendChild(thead);

    headers.forEach(element => {
      const th = createTableHeaderCell();
      th.innerText = sc.capitalize( element)
      let sorting = "";
      let direction = "";

      if (element === sortingHeader) {
        sorting = document.getElementById(element);
        direction = sorting? sorting.innerText:"arrow_downward";
        console.log(direction);
      }

      th.onclick = function() {
        sortTable(container, data, headers, element);
      };

      let directionIcon = null;

      if (direction) {
        directionIcon = document.createElement("i");
        directionIcon.setAttribute("id", element);
        directionIcon.setAttribute("class", "material-icons md-18");
        directionIcon.setAttribute("style", "padding-left:1px; font-size: medium;");
        directionIcon.innerText =
          direction === "arrow_upward" ? "arrow_downward" : "arrow_upward";
        th.appendChild(directionIcon);
      }

      thead.appendChild(th);
    });
  }

  if (data && data.length > 0) {
    // if (sorting && sorting.length > 0 ){
    //   const sc = CustomerService
    //   data = sc.sortCustomers (data, sortByFields, sorting[0].asc)
    // }

    const tbody = createTableBody();
    table.appendChild(tbody);

    data.forEach(element => {
      const tr = createTableRow();
      for (const key in element) {
        const td = createTableData();
        td.innerText = element[key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
  }
  // return table;
  container.children && container.children.length>0 && container.removeChild(container.childNodes[0])
  container.appendChild(table)
}


