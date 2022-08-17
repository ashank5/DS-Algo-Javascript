class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
    }
    pop(){
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }
    delete(index){
        delete this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for(let i= index;i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
console.log('hi');
const newArray= new MyArray();
newArray.push('how');
newArray.push('are');
newArray.push('!');
newArray.pop();
newArray.push('you');
newArray.delete(1);
console.log(newArray);