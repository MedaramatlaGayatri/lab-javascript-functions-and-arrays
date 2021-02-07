// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
    if(num1 > num2){
      return num1;
    }else
      return num2;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(word){
  if(word.length == 0) return null;
    var maxlength = 0;
    var string ="";
    for(let i = 0;i < word.length;i++){
      if(maxlength < word[i].length){
        maxlength = word[i].length;
        string = word[i];
      }
    }
    return string;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(prices){
  var totprice = 0;
  for(let i = 0;i < prices.length;i++){
    totprice += prices[i];
  }
  return totprice;
}
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
  if(mixedArr.length == 0) return null;
  var total = 0;
  for(let i = 0;i < mixedArr.length;i++){
    if(typeof(mixedArr[i]) == 'boolean'){
      if(mixedArr[i] == 'true'){
        total += 1;
      }
    }else if(typeof(mixedArr[i]) == 'string'){
      total += mixedArr[i].length;
    }else {
      total += mixedArr[i];
    }
  }
  return total;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(ar){
    if(ar.length == 0) return null;
    return netPrice(ar)/ar.length;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(word){
    if(word.length == 0) return null;
    return add(word)/word.length;
}

function avg(arr){
  if(arr.length == 0) return null;
  return add(arr)/arr.length;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr){
  if(arr.length == 0) return null;
  var uniquearr = [];
  let k = 0;
  for(let i = 0;i < arr.length;i++){
    if(uniquearr.includes(arr[i]) == false){
      uniquearr[k++] = arr[i];
    }
  }
  return uniquearr;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(word,key){
    for(let i = 0;i < word.length;i++){
      if(word[i] == key) return true;
    }
    return null;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr,key){
  let count = 0;
    for(let i = 0;i < arr.length;i++){
      if(arr[i] == key){
        count++;
      }
    }
    return count;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  let maxsum = 0;
  let sum = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  for(let i = 0;i < m;i++){
    sum = 0;
    for(let k = 0;k < 4;k++){
      sum *= matrix[i][k];
    }
    if(sum > maxsum){
      maxsum = sum;
    }
    for(let j = 4;j < n;j++){
      sum = sum/matrix[i][j-4];
      sum *= matrix[i][j];
      if(sum > maxsum){
        maxsum = sum;
      }
    }
  }

  for(let j = 0;j < n;j++){
      sum = 0;
      for(let k = 0;k < 4;k++){
        sum *= matrix[k][j];
      }
      if(sum > maxsum){
        maxsum = sum;
      }
      for(let i = 4;i < m;i++){
        sum = sum/matrix[i][j-4];
      sum *= matrix[i][j];
      if(sum > maxsum){
        maxsum = sum;
      }
      }
    }
    return maxsum;
 
}

function maximumProductOfDiagonals(matrix){
  let sum1 = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  for(let i = 0,j = 0;i < m && j < n;i++,j++){
    sum1 *= matrix[i][j];
  }
  let sum2 = 0;
  for(let i = 0,j = n-1;i < m && j >= 0;i++,j--){
    sum2 *= matrix[i][j];
  }
  if(sum1 > sum2) 
  return sum1;
  return sum2;
}