---
id: 5900f53c1000cf542c51004e
title: 'Problem 463: A weird recurrence relation'
challengeType: 5
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

กำหนดให้ฟังก์ชัน $f$ ดำเนินการกับจำนวนเต็มบวกดังนี้:

$$\begin{align}
  & f(1) = 1 \\\\
  & f(3) = 3 \\\\
  & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\
  & f(4n + 3) = 3f(2n + 1) - 2f(n)
\end{align}$$

ฟังก์ชัน $S(n)$ คือ $\sum_{i=1}^{n} f(i)$.

$S(8) = 22$ และ $S(100) = 3604$.

ให้หา $S(3^{37})$ โดยตอบเป็นเลขเก้าหลักสุดท้าย

# --hints--

`weirdRecurrenceRelation()` ต้องคืนค่าเป็น `808981553`

```js
assert.strictEqual(weirdRecurrenceRelation(), 808981553);
```

# --seed--

## --seed-contents--

```js
function weirdRecurrenceRelation() {

  return true;
}

weirdRecurrenceRelation();
```

# --solutions--

```js
// solution required
```
