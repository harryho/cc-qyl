console.log("Hello World")

class SampleCl {
    constructor (varName){
        this.varName = varName;
    }

    sampleF=()=>{this.varName}
}


const sampleSub = new SampleCl("name")

console.log(sampleSub.sampleF())