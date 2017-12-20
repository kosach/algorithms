//Quick sort algorithm O(n * log n)
const quickSort = (array) =>{
  const selfRandom = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;
  if(array.length < 2) return array;
  else{
    const pivot = array[selfRandom(0, array.length-1)];
    let less = array.filter(item => item < pivot);
    let greater = array.filter(item => item > pivot);
    return  quickSort(less).concat( pivot, quickSort(greater));
  }
}
console.log(quickSort([4, 8, 9, 22,5, 13, 128, 0, 2, 3, -7]));
