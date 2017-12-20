// Selection sort algorithm O(n^2)
const indSmallest = (arr) =>{
  let smallest = arr[0];
  let smallest_index = 0;
  for(let i=0; i< arr.length; i++){
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}
const selectionSort = (arr) =>{
  const steps = arr.length;
  let i =0
  newArr = [];
  for(i; i < steps; i++){
    smallest = indSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  console.log('New Array', newArr);
}

selectionSort([12, 13, 0, -6, 3, 4, 1, 8]);
