function mergeSortedArrays(array1,array2){
    const mergedArray=[];
    let n1=array1.length;
    let n2=array2.length;
    let i=0;
    let j=0;
    while(i<n1 && j<n2){
        if(array1[i]<array2[j]){
            mergedArray.push(array1[i++])
        }
        else{
            mergedArray.push(array2[j++])
        }
    }
    while(i<n1){
        mergedArray.push(array1[i++])
    }
    while(j<n2){
        mergedArray.push(array2[j++])
    }
    console.log(mergedArray);
}