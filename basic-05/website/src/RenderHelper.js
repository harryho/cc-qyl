import { CustomerService } from "./CustomerService";

const PAGE_SIZE = 2;

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

const createPagination = (
  container,
  data,
  headers,
  sortingHeader,
  pagination
) => {
  const pages = document.createElement("div");
  const pageNum = pagination.pageNum || 1;
  const totalPages = pagination.totalPages;

  let pageCount = 1;
  while (pageCount <= totalPages) {
    if (pageCount === 1) {
      if (1 !== pageNum) {
        const firstLink = document.createElement("a");
        firstLink.innerText = " << ";
          firstLink.setAttribute("style", "color:red; font-weight:bold;");
        firstLink.onclick = function() {
          pagination.pageNum = 1;
          sortTable(container, data, headers, sortingHeader, pagination);
          //   {
          //   // ...pagination,
          //   totalPages,
          //   pageNum: 1
          // });
        };
        pages.appendChild(firstLink);
      } else {
        const first = document.createElement("span");
        first.innerText = " << ";
        pages.appendChild(first);
      }
    }

    if (pageCount !== pageNum) {
      const pageLink = document.createElement("a");
      const pNum = pageCount;
      pageLink.innerText = " " + pageCount + " ";
      pageLink.setAttribute("style", "color:red; font-weight:bold;");
      pageLink.onclick = function() {
        pagination.pageNum = pNum;
        sortTable(container, data, headers, sortingHeader, pagination);
        //  {
        //   // ...pagination,
        //   totalPages,
        //   pageNum: pNum
        // });
      };
      pages.appendChild(pageLink);
    } else {
      const page = document.createElement("span");
      page.innerText = " " + pageCount + " ";
      pages.appendChild(page);
    }

    if (pageCount === totalPages) {
      if (totalPages !== pageNum) {
        const endLink = document.createElement("a");
        endLink.innerText = " >> ";
        endLink.setAttribute("style", "color:red; font-weight:bold;");        
        endLink.onclick = function() {
          pagination.pageNum = totalPages;
          sortTable(container, data, headers, sortingHeader, pagination);
          //   {
          //   // ...pagination,
          //   totalPages,
          //   pageNum: totalPages
          // }
          // ;
        };
        pages.appendChild(endLink);
      } else {
        const end = document.createElement("span");
        end.innerText = " >> ";
        pages.appendChild(end);
      }
    }
    pageCount++;
  }
  return pages;
};

// pagination {
//  pageNum: 1 ,  // by defaut
//  pageSize: 2, // e.g. 2 records per page -- pageSize needs to be setup
// totalPages: 2 // total 2 pages
// }
export function sortTable(container, data, headers, sortingHeader, pagination) {
  console.log("sorting ...");
  const sc = new CustomerService();
  const sorting = document.getElementById(sortingHeader);

  if (!sorting || sorting.innerText === "arrow_upward") {
    sc.sortCustomers(data, [sortingHeader], true);
  } else sc.sortCustomers(data, [sortingHeader], false);

  renderDataTable(container, data, headers, sortingHeader, pagination);
}
// sortingHeader
export function renderDataTable(
  container,
  data,
  headers,
  sortingHeader,
  pagination
) {
  const table = createTable();
  const sc = new CustomerService();

  // Table header
  if (headers) {
    const thead = createTableHeader();
    table.appendChild(thead);

    headers.forEach(element => {
      const th = createTableHeaderCell();
      th.innerText = sc.capitalize(element);
      let sorting = "";
      let direction = "";

      if (element === sortingHeader) {
        sorting = document.getElementById(element);
        direction = sorting ? sorting.innerText : "arrow_downward";
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
        directionIcon.setAttribute(
          "style",
          "padding-left:1px; font-size: medium;"
        );
        directionIcon.innerText =
          direction === "arrow_upward" ? "arrow_downward" : "arrow_upward";
        th.appendChild(directionIcon);
      }

      thead.appendChild(th);
    });
  }
  // Table body
  if (data && data.length > 0) {
    if (!pagination) {
      const pageSize = PAGE_SIZE;
      const totalPages = Math.ceil(data.length / pageSize);

      pagination = { pageSize, totalPages, pageNum: 1 };
    }

    const tbody = createTableBody();
    table.appendChild(tbody);

    let contentList = data;

    if (pagination) {
      contentList = data.slice(
        (pagination.pageNum - 1) * pagination.pageSize,
        pagination.pageNum * pagination.pageSize
      );
    }

    contentList.forEach(element => {
      const tr = createTableRow();
      for (const key in element) {
        const td = createTableData();
        td.innerText = element[key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });

    // Pagination

    if (contentList.length > 0) {
      const pageElm = createPagination(
        container,
        data,
        headers,
        sortingHeader,
        pagination
      );
      console.log(pagination);
      table.appendChild(pageElm);
    }
  }

  container.children &&
    container.children.length > 0 &&
    container.removeChild(container.childNodes[0]);
  container.appendChild(table);
}
