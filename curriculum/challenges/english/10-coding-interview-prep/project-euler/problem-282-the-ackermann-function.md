---
id: 5900f4861000cf542c50ff99
title: 'Problem 282: The Ackermann function'
challengeType: 5
forumTopicId: 301933
dashedName: problem-282-the-ackermann-function
---

# --description--

สำหรับจำนวนเต็มที่ไม่เป็นค่าลบ $m$, $n$ ฟังก์ชัน Ackermann $A(m, n)$ ถูกกำหนดดังนี้:

$$A(m, n) =
\begin{cases}
n + 1                 & \text{if $m = 0$}             \\\\
A(m - 1, 1)           & \text{if $m > 0$ and $n = 0$} \\\\
A(m - 1, A(m, n - 1)) & \text{if $m > 0$ and $n > 0$}
\end{cases}$$

เช่น $A(1, 0) = 2$, $A(2, 2) = 7$ และ $A(3, 4) = 125$

ให้หา $\displaystyle\sum_{n = 0}^6 A(n, n)$ และให้ส่งคำตอบที่ mod ${14}^8$ แล้ว

# --hints--

`ackermanFunction()` ต้องคืนค่าเป็น `1098988351`

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

# --seed--

## --seed-contents--

```js
function ackermanFunction() {

  return true;
}

ackermanFunction();
```

# --solutions--

```js
// solution required
```
