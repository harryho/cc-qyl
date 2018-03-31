import { setTimeout } from "timers";
import { Customer } from "./Customer";

export const DB = {
  getCustomers: () => {
    var promise = new Promise((resolve, reject) => {
      setTimeout(
        function(){
          resolve([
            new Customer("Mr", "John", "abc@john.com", "040370402", 536),
            new Customer("Mr", "Ming", "abc@john.com", "040370102", 436),
            new Customer("Mr", "Jason", "abc@john.com", "041171402", 936),
            new Customer("Ms", "Lyn", "abc@john.com", "04037002", 366),
            new Customer("Mrs", "Brown", "a12bc@john.com", "040370402", 236),
            new Customer("Mrs", "Brown", "awe2bc@john.com", "040370402", 1636),
            new Customer("Mr","Bensan", "abwerc@john.com", "041171402", 936),
            new Customer("Ms", "Barney", "awerbc@john.com", "04037002", 366),
            new Customer("Mrs", "Francis", "sfeabc@john.com", "040370402", 236),
            new Customer("Mrs", "Michael", "abc@john.com", "040370402", 1636)
          ])
        },
        1000
      );
    });

    return promise;
  }
};
