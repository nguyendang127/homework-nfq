const restParamFunc = (...numbers) => {
  // console.log(a);
  // console.log(b);
  console.log(numbers);
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log(total);
};

restParamFunc(1, 2, 3, 4, 5, 6);
