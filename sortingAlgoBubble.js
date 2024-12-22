function bubbleSort(arr) {
    const n = arr.length;
    console.log("Starting Bubble Sort:");
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        console.log(Comparing ${arr[j]} and ${arr[j + 1]});
        if (arr[j] > arr[j + 1]) {

          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          console.log(Swapped ${arr[j]} and ${arr[j + 1]});
        }
      }
      console.log(Array after iteration ${i + 1}:, arr);
    }
    return arr;
  }
  
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt(Enter number ${i + 1}:), 10);
    numbers.push(num);
  }
  
  console.log("Original Array:", numbers);
  
  const sortedArray = bubbleSort(numbers);
  
  console.log("Sorted Array:", sortedArray);