---
id: 5d79253791391b0acddd0ac5
title: Part 82
challengeType: 0
dashedName: part-82
---

# --description--

เพิ่มโค้ดต่อไปนี้ให้กับ `createLabel`:

```js
label.className = "label";
label.textContent = name;
container.appendChild(label);
```

# --hints--

อ่านวิธีทำตามรายละเอียดด้านบน

```js
assert(
  /window\.onload[\s\S]*constcreateLabel=\(?name\)?=>\{constlabel=document\.createElement\(["']div["']\);?label\.className=["']label["'];?label\.textContent=name;?container\.appendChild\(label\);?\}/.test(
    code.replace(/\s/g, '')
  )
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

const range = (start, end) =>
  start > end ? [] : [start].concat(range(start + 1, end));

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map(x =>
    String.fromCharCode(x)
  );

const evalFormula = x => {
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (n1, n2) => range(parseInt(n1), parseInt(n2));
  const elemValue = n => c => document.getElementById(c + n).value;
  const addChars = c1 => c2 => n => charRange(c1, c2).map(elemValue(n));
  const varRangeExpanded = x.replace(rangeRegex, (_, c1, n1, c2, n2) =>
    rangeFromString(n1, n2).map(addChars(c1)(c2))
  );
  const varRegex = /[A-J][1-9][0-9]?/gi;
  const varExpanded = varRangeExpanded.replace(
    varRegex,
    match => document.getElementById(match.toUpperCase()).value
  );
  const functionExpanded = applyFn(varExpanded);
  return functionExpanded === x
    ? functionExpanded
    : evalFormula(functionExpanded);
};

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = name => {
    const label = document.createElement("div");
  };
  const letters = charRange("A", "J");
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

const range = (start, end) =>
  start > end ? [] : [start].concat(range(start + 1, end));

const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map(x =>
    String.fromCharCode(x)
  );

const evalFormula = x => {
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (n1, n2) => range(parseInt(n1), parseInt(n2));
  const elemValue = n => c => document.getElementById(c + n).value;
  const addChars = c1 => c2 => n => charRange(c1, c2).map(elemValue(n));
  const varRangeExpanded = x.replace(rangeRegex, (_, c1, n1, c2, n2) =>
    rangeFromString(n1, n2).map(addChars(c1)(c2))
  );
  const varRegex = /[A-J][1-9][0-9]?/gi;
  const varExpanded = varRangeExpanded.replace(
    varRegex,
    match => document.getElementById(match.toUpperCase()).value
  );
  const functionExpanded = applyFn(varExpanded);
  return functionExpanded === x
    ? functionExpanded
    : evalFormula(functionExpanded);
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
};
</script>
```
