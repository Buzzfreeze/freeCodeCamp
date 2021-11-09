---
id: 5d7925395888767e9304c082
title: Part 119
challengeType: 0
dashedName: part-119
---

# --description--

`reduce` method รับค่าเป็นฟังก์ชันที่มี accumulator (ตัวสะสม) และ element ปัจจุบันที่กำลังถูกอ่าน โดย accumulator ถูกกำหนดให้เริ่มอ่านจากค่าที่ index 0

จากนั้น `reduce` method จะอ่านและรันแต่ละ element ของ array และผลจากการรัน element รอบที่แล้วก็จะเก็บเป็น accumulator

ตัวอย่างเช่น ด้านล่างนี้เป็นวิธีการนำทุกค่าใน array มาคูณกัน

```js
[2, 3, 4].reduce((a, x) => a * x); // 24
```

จงใช้ `reduce` และเพิ่มฟังก์ชัน `sum` ให้กับ `spreadsheetFunctions` โด้ยฟังก์ชันนี้จะนำทุกค่าใน array มาบวกกัน

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  spreadsheetFunctions.sum([10, 5, 1, 3]) === 19 && code.includes('reduce')
);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

## --after-user-code--

```html
</body>
</html>
```

## --seed-contents--

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

const isEven = num => num % 2 === 0;

const spreadsheetFunctions = {
  "": x => x,
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  increment: nums => nums.map(x => x + 1),
  firsttwo: arr => arr.slice(0, 2),
  lasttwo: arr => arr.slice(-2),
  even: nums => nums.filter(isEven)
};



const applyFn = str => {
  const noHigh = highPrecedence(str);
  const infix = /([0-9.]+)([+-])([0-9.]+)/;
  const str2 = infixEval(noHigh, infix);
  const regex = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const applyFunction = (fn, args) =>
    spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(
    regex,
    (match, fn, args) =>
      spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? applyFunction(fn, args) : match
  );
};

const range = (start, end) =>
  start > end ? [] : [start].concat(range(start + 1, end));

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map(x =>
    String.fromCharCode(x)
  );

const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (n1, n2) => range(parseInt(n1), parseInt(n2));
  const elemValue = n => c => idToText(c + n);
  const addChars = c1 => c2 => n => charRange(c1, c2).map(elemValue(n));
  const varRangeExpanded = x.replace(rangeRegex, (_, c1, n1, c2, n2) =>
    rangeFromString(n1, n2).map(addChars(c1)(c2))
  );
  const varRegex = /[A-J][1-9][0-9]?/gi;
  const varExpanded = varRangeExpanded.replace(
    varRegex,
    match => idToText(match.toUpperCase())
  );
  const functionExpanded = applyFn(varExpanded);
  return functionExpanded === x
    ? functionExpanded
    : evalFormula(functionExpanded, cells);
};

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = name => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(x => {
    createLabel(x);
    letters.forEach(y => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = y + x;
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value[0] === "=") {
    element.value = evalFormula(
      value.slice(1),
      Array.from(document.getElementById("container").children)
    );
  }
};
</script>
```

# --solutions--

```html
<script>
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

const isEven = num => num % 2 === 0;

const spreadsheetFunctions = {
  "": x => x,
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  increment: nums => nums.map(x => x + 1),
  firsttwo: arr => arr.slice(0, 2),
  lasttwo: arr => arr.slice(-2),
  even: nums => nums.filter(isEven),
  sum: nums => nums.reduce((a, x) => a + x)
};



const applyFn = str => {
  const noHigh = highPrecedence(str);
  const infix = /([0-9.]+)([+-])([0-9.]+)/;
  const str2 = infixEval(noHigh, infix);
  const regex = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const applyFunction = (fn, args) =>
    spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(
    regex,
    (match, fn, args) =>
      spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? applyFunction(fn, args) : match
  );
};

const range = (start, end) =>
  start > end ? [] : [start].concat(range(start + 1, end));

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map(x =>
    String.fromCharCode(x)
  );

const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (n1, n2) => range(parseInt(n1), parseInt(n2));
  const elemValue = n => c => idToText(c + n);
  const addChars = c1 => c2 => n => charRange(c1, c2).map(elemValue(n));
  const varRangeExpanded = x.replace(rangeRegex, (_, c1, n1, c2, n2) =>
    rangeFromString(n1, n2).map(addChars(c1)(c2))
  );
  const varRegex = /[A-J][1-9][0-9]?/gi;
  const varExpanded = varRangeExpanded.replace(
    varRegex,
    match => idToText(match.toUpperCase())
  );
  const functionExpanded = applyFn(varExpanded);
  return functionExpanded === x
    ? functionExpanded
    : evalFormula(functionExpanded, cells);
};

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = name => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(x => {
    createLabel(x);
    letters.forEach(y => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = y + x;
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value[0] === "=") {
    element.value = evalFormula(
      value.slice(1),
      Array.from(document.getElementById("container").children)
    );
  }
};
</script>
```
