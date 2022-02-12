---
id: 5900f3711000cf542c50fe84
title: 'Problem 5: Smallest multiple'
challengeType: 5
forumTopicId: 302160
dashedName: problem-5-smallest-multiple
---

# --description--

2520 เป็นจำนวนที่น้อยที่สุดที่สามารถถูกหารได้จากทุกจำนวนตั้งแต่ 1 ถึง 10 โดยไม่มีเศษ

จำนวนบวกที่น้อยที่สุดที่หารด้วยเลขคู่ทั้งหมดตั้งแต่ 1 ถึง `n` ลงตัวคืออะไร?


# --hints--

`smallestMult(5)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof smallestMult(5) === 'number');
```

`smallestMult(5)` ต้องคืนค่าเป็น 60

```js
assert.strictEqual(smallestMult(5), 60);
```

`smallestMult(7)` ต้องคืนค่าเป็น 420

```js
assert.strictEqual(smallestMult(7), 420);
```

`smallestMult(10)` ต้องคืนค่าเป็น 2520

```js
assert.strictEqual(smallestMult(10), 2520);
```

`smallestMult(13)` ต้องคืนค่าเป็น 360360

```js
assert.strictEqual(smallestMult(13), 360360);
```

`smallestMult(20)` ต้องคืนค่าเป็น 232792560

```js
assert.strictEqual(smallestMult(20), 232792560);
```

# --seed--

## --seed-contents--

```js
function smallestMult(n) {

  return true;
}

smallestMult(20);
```

# --solutions--

```js
function smallestMult(n){
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
  }

  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  var result = 1;
  for(var i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
```
