function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  function operator(x, y, op) {
    switch (op) {
      case "+":
        return add(x, y);
        break;
  
      case "-":
        return sub(x, y);
        break;
  
      case "*":
        return mul(x, y);
        break;
  
      case "%":
        return div(x, y);
        break;
    }
  }
  
  function convertnum(str) {
    let num, firstnum, secondnum, exp;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "+") {
        num = i;
        if (num == 0) {
          continue;
        }
        exp = str[num];
        break;
      } else if (str[i] == "-") {
        num = i;
        if (num == 0) {
          continue;
        }
        exp = str[num];
        break;
      } else if (str[i] == "*") {
        num = i;
        if (num == 0) {
          continue;
        }
        exp = str[num];
        break;
      } else if (str[i] == "%") {
        num = i;
        if (num == 0) {
          continue;
        }
        exp = str[num];
        break;
      }
    }
    firstnum = parseInt(str.substr(0, num));
    secondnum = parseInt(str.substr(num + 1, str.length - 1));
    text.textContent = operator(firstnum, secondnum, exp);
  }
  
  let text = document.querySelector(".dispzero");
  let btn = document.querySelectorAll(".num,.operator");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector(".clear");
  
  btn.forEach((element) => {
    element.addEventListener("click", function () {
      if (text.textContent == "0") {
        text.textContent = "";
      }
      text.textContent += `${element.textContent}`;
    });
  });
  
  equal.addEventListener("click", function () {
    convertnum(text.textContent);
  });
  
  clear.addEventListener("click", function () {
    text.textContent = "0";
  });