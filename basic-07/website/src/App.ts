// import { Customer } from "./Customer"

(function () {
  function ShowCustomerList() {
    const customers: TsApp.Customer[] = [
      { title: "Mr", name: "John", email: "abc@john.com", mobile: "040370402", credit: 536, gender: Gender.Male },
      { title: "Mr", name: "Ming", email: "abc@john.com", mobile: "040370102", credit: 436, gender: Gender.Female }
    ];

    const main = document.getElementById('main')

    main && (main.textContent = customers.map(customer => customer.name).join("\n"));
    console.log(customers)
  }

  setTimeout(() => { ShowCustomerList() }, 1000);
})()
