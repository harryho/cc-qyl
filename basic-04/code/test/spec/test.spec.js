import  { SuperClass  } from "../src/SuperClass";
import  {  SubClass } from "../src/hello";
import "mocha";
import { assert, expect } from "chai";

describe("SuperClass", () => {
  it("should be able to init the SuperClass ", () => {

    console.log(new SuperClass())

    assert.isTrue(new SuperClass() !== null);
    assert.equal(new SuperClass().getName(), undefined);
  });



});