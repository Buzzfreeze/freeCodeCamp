---
id: 5d7925341747ad42b12f8e68
title: Part 42
challengeType: 0
dashedName: part-42
---

# --description--

การใช้ `push` method สามารถทำได้ เพราะเราเปลี่ยนแปลงค่าภายใน `arr` ไม่ได้กำหนดค่า `arr` ใหม่ (reassign) (ซึ่งไม่สามารถทำได้เมื่อใช้คีย์เวิร์ด `const`) แต่การทำเช่นนี้ก็ยังเป็นการเปลี่ยนแปลง state และเราก็ไม่ต้องการให้เกิดขึ้นใน functional programming

`concat` method คืนค่าเป็น array ตัวใหม่แทนที่จะแก้ไข array ตัวเดิม

```js
[1,2,3].concat(4); // [1, 2, 3, 4]
[1,2,3].concat(4, 5); // [1, 2, 3, 4, 5]
```

จงใช้ `concat` แทนที่ `push` เพื่อคืนค่าเป็นผลลัพธ์ของนำ `end` มาต่อกับ `arr`

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  JSON.stringify(range(1, 2)) === '[1,2]' &&
    code.includes('concat') &&
    !code.includes('push')
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

const spreadsheetFunctions = {
  "": x => x
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

const range = (start, end) => {
  const arr = [start];
  arr.push(end);
  return arr;
}


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

const spreadsheetFunctions = {
  "": x => x
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

const range = (start, end) => {
  const arr = [start];
  return arr.concat(end);
}
</script>
```
