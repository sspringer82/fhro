function func(obj, num) {
  var temp = obj.v / num;
  if (temp >= 1) {
    obj.v -= Math.floor(temp) * num;
    obj.result.push(Math.floor(temp));
  } else {
    obj.result.push(0);
  }
  return obj;
}

function coinCombo(v) {
  var obj = {
    v: v,
    result: [],
  };

  for (var i of [50, 20, 10, 5, 2, 1]) {
    obj = func(obj, i);
  }

  return obj.result;
}
console.log(coinCombo(15));
