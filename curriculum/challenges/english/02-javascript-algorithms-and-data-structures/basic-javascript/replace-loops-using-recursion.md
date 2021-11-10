---
id: 5cfa3679138e7d9595b9d9d4
title: Replace Loops using Recursion
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

# - Recursion (การเรียกตัวเองซ้ำ) เป็นแนวคิดที่ฟังก์ชันสามารถเรียกซ้ำตัวมันเองได้ เพื่อช่วยให้เข้าใจสิ่งนี้ ให้เริ่มต้นด้วยการนึกถึงงานต่อไปนี้: การนำ element `n` ตัวแรกของ array มาคูณกัน หากใช้ลูป `for` คุณจะสามารถทำได้ดังนี้

```js
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

อย่างไรก็ตาม โปรดสังเกตว่า `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]` นั่นหมายความว่าคุณสามารถเขียน `multiply` ในรูปแบบตัวมันเองได้และไม่จำเป็นต้องใช้ loop

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

`multiply` แบบ recursive จะแบ่งขั้นตอนย่อยดังนี้ ใน <dfn>base case</dfn> โดยที่ `n <= 0` จะคืนค่า 1 แต่ถ้า `n > 0` มันจะเรียกตัวเองด้วย `n - 1` ซึ่งจะมีการเรียก `multiply` อีกครั้งเรื่อยๆ จนกระทั่ง `n <= 0` ณ จุดนี้ ฟังก์ชันทั้งหมดสามารถคืนค่าได้ และ `multiply` เดิมจะคืนค่าผลลัพธ์กลับไป

# - **หมายเหตุ:** ฟังก์ชันแบบ Recursive ต้องมี base case เพื่อคืนค่าโดยที่ไม่ต้องเรียกฟังก์ชันอีกครั้ง (ในตัวอย่างนี้ เมื่อ `n <= 0`) แต่หากไม่มี base case ก็จะทำให้ Recursive รันแบบไม่มีที่สิ้นสุด

# --instructions--

จงเขียน recursive function `sum(arr, n)` ที่คืนค่าเป็นผลบวกของ `n` elements แรกของ array `arr`

# --hints--

`sum([1], 0)` ควรเท่ากับ 0

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` ควรเท่ากับ 2

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` ควรเท่ากับ 9

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

โค้ดของคุณไม่ควรใช้ loop ทุกประเภท ((`for` หรือ `while` หรือ higher order functions เช่น `forEach`, `map`, `filter` หรือ `reduce`))

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

คุณควรใช้ recursive ในการแก้ปัญหานี้

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
