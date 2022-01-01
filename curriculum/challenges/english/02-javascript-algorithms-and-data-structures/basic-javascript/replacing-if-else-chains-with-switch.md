---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

ในบางกรณี การเขียนคำสั่ง `switch` จะสามารถเขียนได้ง่ายกว่าการเขียน `if`/`else if` เชื่อมกันหลายๆ ชุด เช่นตัวอย่างด้านล่างนี้:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

จะสามารถเขียนด้วย `switch` ได้เป็น:

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

จงเปลี่ยนคำสั่ง `if`/`else if` ให้เป็นคำสั่ง `switch` 

# --hints--

ห้ามใช้คำสั่ง `else`

```js
assert(!/else/g.test(code));
```

ห้ามใช้คำสั่ง `if`

```js
assert(!/if/g.test(code));
```

ต้องใช้คำสั่ง `break` อย่างน้อยสี่ครั้งในโค้ด

```js
assert(code.match(/break/g).length >= 4);
```

การเรียกใช้ฟังก์ชัน `chainToSwitch("bob")` ต้องคืนค่าออกมาเป็น string `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch(42)` ต้องคืนค่าออกมาเป็น string `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch(1)` ต้องคืนค่าออกมาเป็น string `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch(99)` ต้องคืนค่าออกมาเป็น string `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch(7)` ต้องคืนค่าออกมาเป็น string `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch("John")` ต้องคืนค่าออกมาเป็น `""` (string เปล่า)

```js
assert(chainToSwitch('John') === '');
```

การเรียกใช้ฟังก์ชัน `chainToSwitch(156)` ต้องคืนค่าออกมาเป็น `""` (string เปล่า)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  var answer = "";
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
