---
id: 5900f43e1000cf542c50ff4f
title: 'Problem 209: Circular Logic'
challengeType: 5
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

ตารางแบบ binary จาก $k$-input เป็น map มาจากบิตอินพุต $k$ (เลขฐานสอง 0 เป็น [false] และ 1 เป็น [true]) 
ตัวอย่างเช่น ตาราง $2$ สำหรับฟังก์ชันตรรกะ $AND$ และ $XOR$ คือ:

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

ข้อมูลในตารางนี้ เมื่อเป็น $6$-input binary เมื่อตรวจสอบตามสมการด้านล่าง มีจำนวนเท่าใด

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

สำหรับทั้ง $6$-bit input ($a$, $b$, $c$, $d$, $e$, $f$)

# --hints--

`circularLogic()` ต้องคืนค่าเป็น `15964587728784`

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
