---
id: 5900f38e1000cf542c50fea1
title: 'Problem 34: Digit factorials'
challengeType: 5
forumTopicId: 301998
dashedName: problem-34-digit-factorials
---

# --description--

145 เป็น curious number เช่น 1! + 4! + 5! = 1 + 24 + 120 = 145.

หาตัวเลขและผลรวมของตัวเลขที่เท่ากับผลรวมของ factorial ของ digits ของตัวมันเอง

**Note:** เช่น 1! = 1 และ 2! = 2 ไม่ได้ถูกรวม

# --hints--

`digitFactorial()` ควร return object

```js
assert.typeOf(digitFactorial(), 'object');
```

`digitFactorial()` ควร return { sum: 40730, numbers: [145, 40585] }.

```js
assert.deepEqual(digitFactorial(), { sum: 40730, numbers: [145, 40585] });
```

# --seed--

## --seed-contents--

```js
function digitFactorial() {

  var sum = 0;
  var numbers = [];
  return { sum, numbers };
}

digitFactorial();
```

# --solutions--

```js
// solution required
```
