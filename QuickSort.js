
const quickSort = (array) =>{
  if(array.length < 2) return array;
  else{
    const pivot = array[0];
    let less = array.filter(item => item < pivot);
    let greater = array.filter(item => item > pivot);
    return  quickSort(less).concat( pivot, quickSort(greater));
  }
}
console.log(quickSort([4, 8, 9, 22,5, 13, 128, 0, 2, 3, -7]));
