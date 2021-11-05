---
id: 5900f3871000cf542c50fe9a
title: 'Problem 27: Quadratic primes'
challengeType: 5
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler ค้นพบพบ quadratic formula:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

บ่งบอกว่า formula จะมีค่าเลขเฉพาะ 40 primes สำหรับค่าที่เรียงติดกันของ $0 \\le n \\le 39$. อย่างไรก็ตามเมื่อ $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ ถูกหารโดย 41 และเมื่อ $n = 41, 41^2 + 41 + 41$ และเมื่อถูกหารโดย 41.

สูตร $n^2 - 79n + 1601$ ถูกพบว่าเมื่อมี 80 primes สำหรับค่าที่เรียงติดกันของ $0 \\le n \\le 79$.  coefficients จะมีค่าผลคูณของ −79 และ 1601 คือ −126479

พิจารณา quadratics ในรูปของ:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, where $|a| < range$ and $|b| \le range$<br>
  where $|n|$ is the modulus/absolute value of $n$<br>
  e.g. $|11| = 11$ and $|-4| = 4$<br>
</div>

หาผลคูณของ coefficients $a$ และ $b$ ในรูป quadratic ที่ผลคูณของค่าสูงสุดของจำนวนเฉพาะเป็นค่าที่เรียงติดกัน $n$, โดยเริ่มจาก $n = 0$

# --hints--

`quadraticPrimes(200)` ควร return number.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` ควร return -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` ควร return -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` ควร return -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` ควร return -59231.

```js
assert(quadraticPrimes(1000) == -59231);
```

# --seed--

## --seed-contents--

```js
function quadraticPrimes(range) {

  return range;
}

quadraticPrimes(1000);
```

# --solutions--

```js
// solution required
```
