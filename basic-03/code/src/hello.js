// export class SuperClass {

//     constructor (name){
//         this.id = Symbol(name);
//         this.name =name;
//     }

//     getName=()=>this.name
//     sampleMethod =()=> this.type;
// }
import {SuperClass} from './SuperClass'

export class SubClass extends SuperClass{
    constructor (name){
        super(name)
       this.id = Symbol(name);
    }

    sampleMethod =()=> this.type;
}

