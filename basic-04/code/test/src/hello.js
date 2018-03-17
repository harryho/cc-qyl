import {SuperClass} from './SuperClass'

export class SubClass extends SuperClass{
    constructor (name){
        super(name)
       this.id = Symbol(name);
    }

    sampleMethod =()=> this.type;
}