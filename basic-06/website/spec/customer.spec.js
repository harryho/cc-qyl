import { Customer } from "../src/Customer";
// import  {  SubClass } from "../src/hello";
import "mocha";
import { assert, expect } from "chai";

describe("Customer", () => {
  it("should be able to init the Customer ", () => {
    console.log(new Customer());
    assert.isTrue(new Customer() !== null);
  });

  it("should has properties: title, name, email, mobile ", () => {
    const customer = new Customer();
    assert.isTrue(customer.hasOwnProperty("title"));
  });
});
