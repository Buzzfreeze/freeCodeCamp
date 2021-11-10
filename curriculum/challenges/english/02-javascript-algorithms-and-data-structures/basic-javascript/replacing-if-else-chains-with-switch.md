---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

หากคุณมีหลายตัวเลือกให้เลือก `switch` statement จะสามารถเขียนได้ง่ายกว่า `if`/`else if` statements หลายชุด ดังตัวอย่างต่อไปนี้:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

สามารถเขียนแทนด้วย

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

จงแก้ชุดคำสั่ง `if`/`else if` ให้เป็นคำสั่ง `switch` 

# --hints--

คุณไม่ควรใช้คำสั่ง `else` เลยใน editor

```js
assert(!/else/g.test(code));
```

คุณไม่ควรใช้คำสั่ง `if`  เลยใน editor

```js
assert(!/if/g.test(code));
```

คุณควรมีคำสั่ง `break` อย่างน้อยสี่คำสั่ง

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` ควรคืนค่า string `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` ควรคืนค่า string `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` ควรคืนค่า string `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` ควรคืนค่า string `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` ควรคืนค่า string `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` ควรเป็น `""` (string เปล่า)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` ควรเป็น `""` (string เปล่า)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

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

  // Only change code above this line
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
