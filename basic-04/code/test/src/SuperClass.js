export class SuperClass {

    constructor (name){
        this.id = Symbol(name);
        this.name =name;
    }

    getName=()=>this.name
    sampleMethod =()=> this.type;
}