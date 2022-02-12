---
id: 5900f4de1000cf542c50fff0
title: 'Problem 369: Badugi'
challengeType: 5
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

ในสำรับไพ่มาตรฐาน 52 ใบ ชุดไพ่ 4 ใบคือ Badugi หากมีไพ่ 4 ใบที่ไม่มีคู่และไม่มีไพ่สองใบในชุดเดียวกัน

ให้ $f(n)$ เป็นจำนวนวิธีในการเลือกไพ่ $n$ ที่มีชุดย่อยไพ่ 4 ใบที่เป็น Badugi  
เช่น มี $2\\,598\\,960$ วิธี ในการเลือกไพ่ห้าใบจากสำรับไพ่มาตรฐาน 52 ใบ ซึ่ง $514\\,800$ มีชุดย่อยไพ่ 4 ใบที่เป็น Badugi ดังนั้น $f(5 ) = 514800$.

หา $\sum f(n)$ ถ้า $4 ≤ n ≤ 13$

# --hints--

`badugi()` ต้องคืนค่าเป็น `862400558448`

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```
