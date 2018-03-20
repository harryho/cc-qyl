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

export const RenderHelper = {
  renderDataTable: (data, headers) => {
    if (data && data.length > 0) {
      const table = createTable();

      if (headers) {
        const thead = createTableHeader();
        table.appendChild(thead);

        headers.forEach(element => {
          const th = createTableHeaderCell();
          th.innerText = element;
          thead.appendChild(th);
        });
      }
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
      return table;
    }
    return null;
  }
};
