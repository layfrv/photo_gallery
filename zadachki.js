const arr = [1, 2, 3];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  return array;
}

let count = {
  123: 0,
  231: 0,
  213: 0,
  132: 0,
  321: 0,
  312: 0,
};

for (let i = 1; i < 1000; i++) {
  let result = shuffle(arr);
  count[result.join('')]++;
}

console.log(count);
 