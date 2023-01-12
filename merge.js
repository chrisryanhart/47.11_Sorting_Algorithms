function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;

    // while length less than arr1
    // while length less than arr2
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sortedArr.push(arr1[i]);
            i++;
        }else{
            sortedArr.push(arr2[j]);
            j++
        }
    }

    while(i < arr1.length){
        sortedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        sortedArr.push(arr2[j]);
        j++;
    }

    return sortedArr;
}

function mergeSort(arr) {

    if(arr.length <= 1) return arr;

    const midpoint = Math.floor(arr.length/2);

    const firstArrHalf = arr.slice(0,midpoint);
    const secondArrHalf = arr.slice(midpoint);

    const sortedFirstHalf = mergeSort(firstArrHalf);
    const sortedSecondHalf = mergeSort(secondArrHalf);

    const sortedArr = merge(sortedFirstHalf,sortedSecondHalf);

    return sortedArr;
}

module.exports = { merge, mergeSort};