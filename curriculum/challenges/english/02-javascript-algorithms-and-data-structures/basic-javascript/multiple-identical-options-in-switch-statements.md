---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

ถ้าไม่ระบุ `break` statement ในแต่ละ `case` ของคำสั่ง `switch` ก็จะทำให้ `case` ถัดไปทำงานจนกว่าจะเจอคำสั่ง `break` ถ้าคุณมีหลาย input ที่มี output เหมือนกัน คุณสามารถใช้คำสั่ง `switch` ดังนี้


```js
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

case สำหรับค่า 1, 2, และ 3 จะให้ผลลัพธ์เดียวกัน

# --instructions--

จงเขียนคำสั่ง switch เพื่อกำหนดค่า `answer` ตามช่วงต่อไปนี้: 

`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**หมายเหตุ:** คุณจะต้องมีคำสั่ง `case` สำหรับแต่ละช่วงตัวเลข

# --hints--

`sequentialSizes(1)` ควรคืนค่า string `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` ควรคืนค่า string `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` ควรคืนค่า string `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` ควรคืนค่า string `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` ควรคืนค่า string `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` ควรคืนค่า string `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` ควรคืนค่า string `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` ควรคืนค่า string `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` ควรคืนค่า string `High`

```js
assert(sequentialSizes(9) === 'High');
```

คุณไม่ควรใช้คำสั่ง `if` หรือ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

คุณควรมีคำสั่ง `case` อย่างน้อยเก้าคำสั่ง

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
