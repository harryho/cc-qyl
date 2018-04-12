import {Customer} from "./Customer"


function ShowCustomerList () {
    const customers: Customer[] = [
        {title: "Mr", name: "John", email: "abc@john.com", mobile: "040370402", credit: 536},
        {title: "Mr",  name: "Ming", email:"abc@john.com", mobile: "040370102",credit:  436}
      
      ];

    const main = document.getElementById('main');
   

   main && (main.innerHTML = customers.map(customer => customer.name).join("\n"));
   console.log(customers)

}
setTimeout(()=>{ ShowCustomerList()}, 1000);
