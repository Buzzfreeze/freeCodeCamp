---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

ใน`switch` statement คุณอาจไม่สามารถระบุค่าที่เป็นไปได้ทั้งหมดด้วย `case` statements อย่างไรก็ตาม คุณสามารถใช้ `default` statement แทนเพื่อรันกรณีที่ไม่ตรงกับเงื่อนไข `case` ใดเลย โดยให้คิดว่าเหมือนกับ `else` statement ของคำสั่ง `if/else` 


`default` statement ควรเป็น case ท้ายสุด

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

จงเขียนคำสั่ง switch เพื่อกำหนดค่าให้กับ `answer` ด้วยเงื่อนไขต่อไปนี้
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` ควรคืนค่า string `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` ควรคืนค่า string `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` ควรคืนค่า string `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` ควรคืนค่า string `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` ควรคืนค่า string `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

คุณไม่ควรใช้คำสั่ง `if` หรือ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

คุณควรใช้คำสั่ง `default` อย่างน้อยสามคำสั่ง

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

คุณควรมีคำสั่ง `break` อย่างน้อยสามคำสั่ง

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  var answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
