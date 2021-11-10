---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

ถ้าคุณมีเงื่อนไขหลายๆ เงื่อนไขที่ต้องเช็ค คุณสามารถใช้คำสั่ง `if` ต่อเนื่องกัน ด้วยคำสั่ง `else if`


```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--


จงเปลี่ยน logic ไปใช้คำสั่ง `else if`

# --hints--



คุณควรมีคำสั่ง `else` อย่างน้อยสองคำสั่ง

```js
assert(code.match(/else/g).length > 1);
```

คุณควรมีคำสั่ง `if` อย่างน้อยสองคำสั่ง

```js
assert(code.match(/if/g).length > 1);
```

คุณควรมีวงเล็บปีกกาเปิดและปิดสำหรับแต่ละคำสั่ง `if else` 

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` ควรคืนค่า string  `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` ควรคืนค่า string  `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` ควรคืนค่า string  `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` ควรคืนค่า string  `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` ควรคืนค่า string  `Greater than 10`

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
