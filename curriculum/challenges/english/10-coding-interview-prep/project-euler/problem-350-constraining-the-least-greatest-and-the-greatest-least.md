---
id: 5900f4cb1000cf542c50ffdd
title: 'Problem 350: Constraining the least greatest and the greatest least'
challengeType: 5
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

รายการขนาด $n$ เป็นลำดับของตัวเลขธรรมชาติ $n$ ตัวอย่าง ได้แก่ (2, 4, 6), (2, 6, 4), (10, 6, 15, 6) และ (11)

ตัวหารร่วมมากหรือ $gcd$ ของรายการคือจำนวนธรรมชาติที่ใหญ่ที่สุดที่หารรายการทั้งหมดของรายการ ตัวอย่าง: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ และ $gcd(11) = 11$

ตัวคูณร่วมน้อยหรือ $lcm$ ของรายการคือจำนวนธรรมชาติที่น้อยที่สุดที่หารด้วยแต่ละรายการของรายการ ตัวอย่าง: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ และ $lcm(11) = 11$

ให้ $f(G, L, N)$ เป็นจำนวนรายการของขนาด $N$ โดยที่ $gcd ≥ G$ และ $lcm ≤ L$ ตัวอย่างเช่น:

$$\begin{align}
  & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\
  & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053
\end{align}$$

หา $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

# --hints--

`leastGreatestAndGreatestLeast()` ควร return `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
