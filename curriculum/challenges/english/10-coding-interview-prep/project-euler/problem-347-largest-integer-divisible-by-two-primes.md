---
id: 5900f4c81000cf542c50ffd9
title: 'Problem 347: Largest integer divisible by two primes'
challengeType: 5
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

จำนวนเต็มที่มากที่สุด $≤ 100$ ที่หารด้วยจำนวนเฉพาะ 2 และ 3 ลงตัวคือ 96 เนื่องจาก $96 = 32 \times 3 = 2^5 \times 3$

สำหรับสองจำนวนเฉพาะที่แตกต่างกัน $p$ และ $q$ ให้ $M(p, q, N)$ เป็นจำนวนเต็มบวกที่ใหญ่ที่สุด $≤ N$ หารด้วยทั้ง $p$ และ $q$ และ $M(p, q, เท่านั้น N)=0$ หากไม่มีจำนวนเต็มบวกดังกล่าว

เช่น $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ และไม่ใช่ 90 เพราะ 90 หารด้วย 2, 3 และ 5 ลงตัว นอกจากนี้ $M(2, 73, 100) = 0$ เนื่องจากไม่มีจำนวนเต็มบวก $≤ 100 $ ที่หารด้วย 2 และ 73 ลงตัว

ให้ $S(N)$ เป็นผลรวมของ $M(p, q, N)$ ที่แตกต่างกันทั้งหมด $S(100)=2262$.

หา $S(10\\,000\\,000)$

# --hints--

`integerDivisibleByTwoPrimes()` ควร return `11109800204052`.

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function integerDivisibleByTwoPrimes() {

  return true;
}

integerDivisibleByTwoPrimes();
```

# --solutions--

```js
// solution required
```
