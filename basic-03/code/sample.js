class Customer {

    constructor(title, firstName, lastName, email, mobile, credit) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.title = title;
     this.email = email;
     this.mobile = mobile;
     this.credit=credit;
   }
 }
 
 class CustomerService {
   constructor() {
     this.customers = [
       new Customer("Ms", "Jane", "Smith", "xx@email.com", "1232454", 244),
       new Customer("Mr", "John", "Doe", "bb@email.com", "324233", 1999),
       new Customer("Mr", "Jack", "William", "fdfa_c@email.com", "777222", 908),
       new Customer("Ms", "Rose", "William", "cc@email.com", "4545", 9345),
       new Customer("Ms", "Teresa", "Wright", "345cvdf_dd@email.com", "777222", 1345)
     ];
   }
 
   getCustomers() {
 
     return this.customers;
   }
 
   searchCustomers(filter) {
     // TODO
 
     return this.customers;
   }
 }
 
 const App = () => {
   return {
     run: () => {
       console.log("App loading ... ");
 
       console.log("\n Customer List \n  ");
 
       const service = new CustomerService();
       const customers = service.getCustomers();
 
       const customerList = customers.map(c =>
         [c.title, c.firstName, c.lastName, c.email, c.mobile].join(" ")
       );
 
       const customerListContent = customerList.reduce(
         (acc, val) => (acc += val + "\n"),
         ""
       );

       // TODO Task -- Add list header
       // TODO Task -- Sort the list by name 
       console.log(customerListContent);
     },
 
     search: ( filters)  => {
       // TODO Task -- filter customers by name, email, mobile
      

 
     }
   };
 };
 
 
 
 (app => {
 
    app.run();

    const filters={
        name: "",
        email: "",
        mobile: ""
    }

    const list = app.search(filters)
    console.log(list);

    // TODO Task -- highlight the matched content (optional)

     
 })(App(), false);
 