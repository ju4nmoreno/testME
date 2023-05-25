const arguments = process.argv;

function getPairs(arr, sum) {
  let pairs = [];
  const lengthArr = 9;

  for (let i = 0; i < lengthArr; i++) {
    for (let j = i + 1; j < lengthArr; j++) {
      if (parseInt(arr[i]) + parseInt(arr[j]) == +sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  pairs.forEach((pair) => {
    console.log(pair.toString());
  });
}

getPairs(arguments[2].split(","), arguments[3]);
