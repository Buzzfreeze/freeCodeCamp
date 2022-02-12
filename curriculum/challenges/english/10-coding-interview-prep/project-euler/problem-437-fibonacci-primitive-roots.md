---
id: 5900f5241000cf542c510036
title: 'Problem 437: Fibonacci primitive roots'
challengeType: 5
forumTopicId: 302108
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

เมื่อเราคำนวณ $8^n$ โมดูโล 11 สำหรับ $n = 0$ ถึง 9 เราได้ 1, 8, 9, 6, 4, 10, 3, 2, 5, 7

เนื่องจากเราเห็นค่าที่เป็นไปได้ทั้งหมดตั้งแต่ 1 ถึง 10 เกิดขึ้น 
ดังนั้น 8 จึงเป็น primitive root ของ 11

หากดูดีๆ จะเห็นว่า

$$\begin{align}
  & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\
  & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\
  & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\
  & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\
  & 5 + 7 = 12 ≡ 1\bmod 11.
\end{align}$$

ดังนั้นกำลังของ 8 mod 11 จึงเป็นวงจรที่มีจุด 10 และ $8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$  
8 เรียกว่า Fibonacci primitive root ของ 11

ไม่ใช่ทุกจำนวนเฉพาะที่มี Fibonacci primitive root 

มีจำนวนเฉพาะ 323 ตัวที่น้อยกว่า 10,000 ที่มี Fibonacci primitive root ตั้งแต่หนึ่งตัวขึ้นไป และผลรวมของจำนวนเฉพาะเหล่านี้คือ 1480491

หาผลรวมของจำนวนเฉพาะที่น้อยกว่า $100\\,000\\,000$ ที่มี Fibonacci primitive root อย่างน้อยหนึ่งตัว

# --hints--

`fibonacciPrimitiveRoots()` ต้องคืนค่าเป็น `74204709657207`

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function fibonacciPrimitiveRoots() {

  return true;
}

fibonacciPrimitiveRoots();
```

# --solutions--

```js
// solution required
```
