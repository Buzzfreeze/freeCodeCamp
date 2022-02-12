---
id: 594810f028c0303b75339ad5
title: Y combinator
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

ใน [functional programming](<https://www.freecodecamp.org/news/the-principles-of-functional-programming/> "news: the principles of functional programming") และ [lambda calculus](<https://en.wikipedia.org/wiki/lambda calculus> "wp: lambda calculus") ฟังก์ชัน (หรือ lambda expression) จะไม่มี state ของตัวเองและจะใช้ค่าได้เฉพาะค่าที่อยู่ในขอบเขตของตัวเองเท่านั้น

ซึ่งการทำแบบนี้จะทำให้การใช้ฟังก์ชันแบบ recursive เปลี่ยนไป เพราะปกติแล้วฟังก์ชันแบบ recursive จะใช้และเปลี่ยนแปลง state ของตัวแปรที่ส่งเข้ามาในฟังก์ชัน 

แต่ [Y combinator](https://mvanier.livejournal.com/2897.html) เป็น stateless function ซึ่งเมื่อนำไปใช้กับ stateless function อื่น จะคืนค่าฟังก์ชันนั้นที่เป็นแบบ recursive ออกมา 

Y combinator เป็นรูปแบบที่ง่ายที่สุดของฟังก์ชันดังกล่าว โดยจะเรียกว่า [fixed-point combinators](<https://en.wikipedia.org/wiki/Fixed-point combinator> "wp: fixed-point combinator")

# --instructions--

ให้เขียนฟังก์ชัน Y combinator เป็นแบบ stateless และใช้เพื่อคำนวณ [factorial](https://en.wikipedia.org/wiki/Factorial "wp: factorial")

เราได้ประกาศฟังก์ชัน `factorial(N)` ไว้ให้แล้ว 

**อ่านเพิ่มเติมที่:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>

# --hints--

`Y` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

`factorial(1)` ต้องคืนค่าเป็น 1

```js
assert.equal(factorial(1), 1);
```

`factorial(2)` ต้องคืนค่าเป็น 2

```js
assert.equal(factorial(2), 2);
```

`factorial(3)` ต้องคืนค่าเป็น 6

```js
assert.equal(factorial(3), 6);
```

`factorial(4)` ต้องคืนค่าเป็น 24

```js
assert.equal(factorial(4), 24);
```

`factorial(10)` ต้องคืนค่าเป็น 3628800

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
