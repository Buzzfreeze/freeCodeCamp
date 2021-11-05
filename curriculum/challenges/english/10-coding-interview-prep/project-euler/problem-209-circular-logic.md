---
id: 5900f43e1000cf542c50ff4f
title: 'Problem 209: Circular Logic'
challengeType: 5
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

ตารางความจริงbinary $k$-input เป็นแผนที่จากบิตอินพุต $k$ (เลขฐานสอง 0 [false] หรือ 1 [true]) ถึง 1 บิตเอาต์พุต ตัวอย่างเช่น ตารางความจริงbinaryอินพุต $2$-input สำหรับฟังก์ชันตรรกะ $AND$ และ $XOR$ คือ:

| x | y | x AND y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

| x | y | x XOR y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

$6$-input binary ตาม truth tables, $τ$, satisfy formula มีเท่าไหร่

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

สำหรับทุก $6$-bit inputs ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` ควร return `15964587728784`.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```
