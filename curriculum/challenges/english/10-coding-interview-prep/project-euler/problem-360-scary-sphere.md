---
id: 5900f4d41000cf542c50ffe7
title: 'Problem 360: Scary Sphere'
challengeType: 5
forumTopicId: 302021
dashedName: problem-360-scary-sphere
---

# --description--

กำหนดจุดสองจุด ($x_1$, $y_1$, $z_1$) และ ($x_2$, $y_2$, $z_2$) ในพื้นที่สามมิติ ระยะทางแมนฮัตตันระหว่างจุดเหล่านั้นถูกกำหนดเป็น $|x_1 - x_2| + |y_1 - y_2| + |z_1 - z_2|$.

ให้ $C(r)$ เป็นทรงกลมที่มีรัศมี $r$ และจุดศูนย์กลางอยู่ที่จุดกำเนิด $O(0, 0, 0)$

ให้ $I(r)$ เป็นเซตของจุดทั้งหมดที่มีพิกัดจำนวนเต็มบนพื้นผิวของ $C(r)$

ให้ $S(r)$ เป็นผลรวมของระยะทางแมนฮัตตันขององค์ประกอบทั้งหมดของ $I(r)$ ไปยังจุดกำเนิด $O$

เช่น $S(45)=34518$

หา $S({10}^{10})$

# --hints--

`scarySphere()` ต้องคืนค่าเป็น `878825614395267100`

```js
assert.strictEqual(scarySphere(), 878825614395267100);
```

# --seed--

## --seed-contents--

```js
function scarySphere() {

  return true;
}

scarySphere();
```

# --solutions--

```js
// solution required
```
