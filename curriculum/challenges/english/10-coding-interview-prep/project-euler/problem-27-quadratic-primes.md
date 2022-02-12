---
id: 5900f3871000cf542c50fe9a
title: 'Problem 27: Quadratic primes'
challengeType: 5
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Euler ค้นพบสมการกำลังสองนี้:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

สมการนี้จะสร้างจำนวนเฉพาะ 40 ตัวในช่วง $0 \\le n \\le 39$
แต่ถ้า $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ จะหาร 41 ลงตัว และเมื่อ $n = 41, 41^2 + 41 + 41$ ก็จะหารด้วย 41 ลงตัว

สมการ $n^2 - 79n + 1601$ ถูกค้นพบ และพบว่าใช้สร้างจำนวนเฉพาะ 80 ตัวในช่วง $0 \\le n \\le 79$ ได้ โดยผลคูณของค่าสัมประสิทธิ์ตั้งแต่ −79 ถึง 1601 คือ −126479

ลองมองการยกกำลังในรูป:

<div style='margin-left: 4em;'>
  $n^2 + an + b$ เมื่อ $|a| < range$ และ $|b| \le range$<br>
  เมื่อ $|n|$ เป็นค่า modulus/absolute ของ $n$<br>
  เช่น $|11| = 11$ และ $|-4| = 4$<br>
</div>

หาผลคูณของค่าสัมประสิทธิ์ $a$ และ $b$ ของสมการกำลังสองที่ใช้สร้างจำนวนเฉพาะ $n$ ตัว โดยเริ่มจาก โดยเริ่มจาก $n = 0$

# --hints--

`quadraticPrimes(200)` ต้องคืนค่าเป็น number

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` ต้องคืนค่าเป็น -4925

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` ต้องคืนค่าเป็น -18901

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` ต้องคืนค่าเป็น -43835

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` ต้องคืนค่าเป็น -59231

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
