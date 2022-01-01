---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

ใน `switch` คุณอาจไม่สามารถระบุค่าที่เป็นไปได้ทั้งหมดด้วย `case` อย่างไรก็ตาม คุณสามารถใช้ `default` แทนเพื่อรันกรณีที่ไม่ตรงกับเงื่อนไข `case` ใดเลย โดยให้คิดว่าเหมือนกับ `else` ของคำสั่ง `if/else` 

ถ้าคุณใช้ `switch` คุณอาจพบว่าคุณใส่ทุกๆ เงื่อนไขลงใน `case` ไม่ได้ เราขอแนะนำอีกหนึ่งคำสั่งคือคำสั่ง `default`
โดยคำสั่ง `default` นั้นจะทำงานถ้าข้อมูลที่ระบุไปนั้นไม่ตรงกับ `case` ใดเลย ให้มองง่ายๆ ก็คือเหมือนกับการใช้ `else` ในคำสั่ง `if/else` นั่นเอง

คำสั่ง `default` ต้องวางไว้เป็น case สุดท้าย

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

จงเขียนคำสั่ง switch เพื่อกำหนดค่าให้กับตัวแปร `answer` ด้วยเงื่อนไขต่อไปนี้
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

การเรียกใช้ฟังก์ชัน `switchOfStuff("a")` ต้องคืนค่าออกมาเป็น string `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

การเรียกใช้ฟังก์ชัน `switchOfStuff("b")` ต้องคืนค่าออกมาเป็น string `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

การเรียกใช้ฟังก์ชัน `switchOfStuff("c")` ต้องคืนค่าออกมาเป็น string `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

การเรียกใช้ฟังก์ชัน `switchOfStuff("d")` ต้องคืนค่าออกมาเป็น string `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

การเรียกใช้ฟังก์ชัน `switchOfStuff(4)` ต้องคืนค่าออกมาเป็น string `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

ห้ามใช้คำสั่ง `if` และ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

ต้องใช้คำสั่ง `default` ในโค้ดด้วย

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

ต้องใช้คำสั่ง `break` อย่างน้อยสามครั้งในโค้ด

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  var answer = "";
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
