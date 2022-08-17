class HashTable{
    constructor(size){
        this.data=new Array(size);
    }
    
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }
    set(key,value){
        let address= this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        console.log(this.data);
    }
    get(key){
        let address=this._hash(key);
        const currentbucket= this.data[address];
        console.log(currentbucket);
        console.log(currentbucket.length);
        if(currentbucket){
            for(let i=0;i<currentbucket.length;i++){
                if(currentbucket[i][0]===key){
                    console.log(currentbucket[i][1]);
                    return currentbucket[i][1];
                    
                }
            }
        }
        return undefined;
    }
    keys(){
        const keysArray=[];
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
            console.log('keys')
            console.log(this.data);
            console.log(this.data[i]);
            console.log(this.data[i][0]);
            console.log(this.data[i][0][0]);
        }
    }
}
}

const hashTable=new HashTable(3);
hashTable.set("Deoghar",814112);
hashTable.set("Ranchi",811101);
hashTable.get("Deoghar");
hashTable.keys();