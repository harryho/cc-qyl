import  { SuperClass  } from "../src/SuperClass";
import  {  SubClass } from "../src/hello";
import "mocha";
import { assert, expect } from "chai";

describe("SuperClass", () => {
  it("should be able to init the SuperClass ", () => {

    assert.isTrue(new SuperClass() !== null);
    assert.equal(new SuperClass().getName(), undefined);
  });

  it("should be able to check the object is the instance of the SuperClass ", () => {
    assert.isTrue( new SuperClass()  instanceof SuperClass);
  });

  it("should be able to check the object is the instance of the SuperClass ", () => {

    const a = new SuperClass("same-name");
    const b = new SuperClass("same-name");
    assert.isTrue( a.getName() ===b.getName());
    assert.isFalse( a.id === b.id );
  });

});

describe("SubClass", () => {
  it("should be able to init the SubClass ", () => {
    const name="abc";
    assert.isTrue(new SubClass() !== null);
    assert.equal(new SubClass().getName(), undefined);
    assert.notEqual(new SubClass().getName(), name);
  });
});
