---
id: 5900f5271000cf542c510039
title: 'Problem 442: Eleven-free integers'
challengeType: 5
forumTopicId: 302114
dashedName: problem-442-eleven-free-integers
---

# --description--

จำนวนเต็มเรียกว่า eleven-free หากการขยายทศนิยมไม่มีสตริงย่อยใด ๆ ที่แสดงกำลัง 11 ยกเว้น 1

เช่น 2404 และ 13431 เป็น eleven-free ในขณะที่ 911 และ 4121331 ไม่ใช่

ให้ $E(n)$ เป็นจำนวนเต็มบวก eleven-free ที่ $n$  

เช่น $E(3) = 3$, $E(200) = 213$ และ $E(500\\,000) = 531\\,563$

ให้หา $E({10}^{18})$

# --hints--

`elevenFreeIntegers()` ต้องคืนค่าเป็น `1295552661530920200`

```js
assert.strictEqual(elevenFreeIntegers(), 1295552661530920200);
```

# --seed--

## --seed-contents--

```js
function elevenFreeIntegers() {

  return true;
}

elevenFreeIntegers();
```

# --solutions--

```js
// solution required
```
