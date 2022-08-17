//console.log("Hello World!");
// "Hi Ashank"
function reverseString(str){
    const array=str.split("");
    const reverse=[];
    let lastIndex=array.length-1;
    for(let i=0;i<=lastIndex;i++){
        reverse[i]=array[lastIndex-i];
    }
    console.log(reverse.join(""));
}
let vari="Hi Ashank";
reverseString(vari);