---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
dashedName: chaining-if-else-statements
---

# --description--

คำสั่ง `if/else` สามารถเชื่อมต่อกันเพื่อสร้าง logic ที่ซับซ้อน ด้านล่างเป็น <dfn>pseudocode</dfn> ของการเชื่อมต่อคำสั่ง `if` / `else if` หลายคำสั่ง


```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

# --instructions--

จงเขียนเชื่อมคำสั่ง `if`/`else if` เพื่อให้เป็นไปตามเงื่อนไขด้านล่าง

`num < 5` - ส่งคืนค่า `Tiny`  
`num < 10` - ส่งคืนค่า `Small`  
`num < 15` - ส่งคืนค่า `Medium`  
`num < 20` - ส่งคืนค่า `Large`  
`num >= 20` - ส่งคืนค่า `Huge`

# --hints--

คุณควรมีคำสั่ง `else` อย่างน้อยสี่คำสั่ง

```js
assert(code.match(/else/g).length > 3);
```

คุณควรมีคำสั่ง `if` อย่างน้อยสี่คำสั่ง

```js
assert(code.match(/if/g).length > 3);
```

คุณควรมีคำสั่ง `return` อย่างน้อยหนึ่งคำสั่ง

```js
assert(code.match(/return/g).length >= 1);
```

`testSize(0)` ควรคืนค่า string `Tiny`

```js
assert(testSize(0) === 'Tiny');
```

`testSize(4)` ควรคืนค่า string `Tiny`

```js
assert(testSize(4) === 'Tiny');
```

`testSize(5)` ควรคืนค่า string `Small`

```js
assert(testSize(5) === 'Small');
```

`testSize(8)` ควรคืนค่า string `Small`

```js
assert(testSize(8) === 'Small');
```

`testSize(10)` ควรคืนค่า string `Medium`

```js
assert(testSize(10) === 'Medium');
```

`testSize(14)` ควรคืนค่า string `Medium`

```js
assert(testSize(14) === 'Medium');
```

`testSize(15)` ควรคืนค่า string `Large`

```js
assert(testSize(15) === 'Large');
```

`testSize(17)` ควรคืนค่า string `Large`

```js
assert(testSize(17) === 'Large');
```

`testSize(20)` ควรคืนค่า string `Huge`

```js
assert(testSize(20) === 'Huge');
```

`testSize(25)` ควรคืนค่า string `Huge`

```js
assert(testSize(25) === 'Huge');
```

# --seed--

## --seed-contents--

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
```

# --solutions--

```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```
