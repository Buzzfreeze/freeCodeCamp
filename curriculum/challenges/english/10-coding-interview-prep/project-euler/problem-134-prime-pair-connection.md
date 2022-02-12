---
id: 5900f3f21000cf542c50ff05
title: 'Problem 134: Prime pair connection'
challengeType: 5
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

พิจารณาจำนวนเฉพาะที่ต่อเนื่องกัน $p_1 = 19$ และ $p_2 = 23$ สามารถตรวจสอบได้ว่า 1219 เป็นจำนวนที่น้อยที่สุด โดยที่ตัวเลขสุดท้ายประกอบด้วย $p_1$ ในขณะที่ $p_2$ หารด้วยลงตัว

ยกเว้น $p_1 = 3$ และ $p_2 = 5$ จำนวนเฉพาะทุกคู่ที่ต่อเนื่องกัน $p_2 > p_1$ มีค่า $n$ ซึ่งตัวเลขสุดท้ายถูกสร้างขึ้นโดย $p_1$ และ $n$ หารด้วย $p_2$ ลงตัว ให้ $S$ เป็นค่าที่น้อยที่สุดของค่าเหล่านี้ของ $n$

ให้หา $\sum{S}$ สำหรับทุกคู่ของจำนวนเฉพาะที่ต่อเนื่องกันด้วย $5 ≤ p_1 ≤ 1000000$

# --hints--

`primePairConnection()` ต้องคืนค่าเป็น `18613426663617120`

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
