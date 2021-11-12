---
id: 594810f028c0303b75339ad5
title: Y combinator
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

[functional programming](<https://www.freecodecamp.org/news/the-principles-of-functional-programming/> "news: the principles of functional programming") และ [lambda calculus](<https://en.wikipedia.org/wiki/lambda calculus> "wp: lambda calculus"), functions (lambda expressions) ไม่มีสถานะและได้รับอนุญาตให้อ้างถึงอาร์กิวเมนต์ของฟังก์ชันที่ล้อมรอบเท่านั้น สิ่งนี้จะตัดคำจำกัดความปกติของฟังก์ชันแบบเรียกซ้ำซึ่งฟังก์ชันนั้นสัมพันธ์กับสถานะของตัวแปรและสถานะของตัวแปรนี้ถูกใช้ในเนื้อหาของฟังก์ชัน The [Y combinator](https://mvanier.livejournal.com/2897.html) เป็นstateless functionซึ่งเมื่อนำไปใช้กับstateless functionอื่น จะคืนค่าฟังก์ชันแบบเรียกซ้ำ Y combinator เป็นclassที่ง่ายที่สุดของฟังก์ชันดังกล่าว เรียกว่า [fixed-point combinators](<https://en.wikipedia.org/wiki/Fixed-point combinator> "wp: fixed-point combinator").

# --instructions--

กำหนดฟังก์ชัน Y combinator แบบstateless functionและใช้เพื่อคำนวณ [factorial](https://en.wikipedia.org/wiki/Factorial "wp: factorial"). `factorial(N)` function กำหนดให้แล้ว. **See also:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>

# --hints--

Y ควร return function.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) ควร return 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) ควร return 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) ควร return 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) ควร return 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) ควร return 3628800.

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --after-user-code--

```js
var factorial = Y(f => n => (n > 1 ? n * f(n - 1) : 1));
```

## --seed-contents--

```js
function Y(f) {
  return function() {

  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

# --solutions--

```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));
```
