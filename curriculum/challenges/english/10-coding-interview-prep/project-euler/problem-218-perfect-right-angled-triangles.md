---
id: 5900f4461000cf542c50ff59
title: 'Problem 218: Perfect right-angled triangles'
challengeType: 5
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

พิจารณาสามเหลี่ยมมุมฉากที่มีด้านเป็น $a=7$, $b=24$ และ $c=25$

พื้นที่ของสามเหลี่ยมนี้คือ 84 ซึ่งหารด้วย 6 และ 28 (ซึ่งเป็นเลขสมบูรณ์) ลงตัว

นอกจากนี้ มันคือสามเหลี่ยมมุมฉากดั้งเดิม เช่น $gcd(a,b) = 1$ และ $gcd(b,c) = 1$

นอกจากนี้ $c$ ยังเป็นกำลังสองสมบูรณ์

เราจะเรียกสามเหลี่ยมมุมฉากว่า "สมบูรณ์" ถ้า:

- เป็นรูปสามเหลี่ยมมุมฉากดั้งเดิม
- ด้านตรงข้ามมุมฉากเป็นกำลังสองสมบูรณ์

เราจะเรียกสามเหลี่ยมมุมฉากว่า "สมบูรณ์มาก" ถ้า:

- เป็นรูปสามเหลี่ยมมุมฉากแบบสมบูรณ์
- มีพื้นที่เป็นผลคูณของจำนวนเต็ม 6 และ 28

มีสามเหลี่ยมมุมฉากสมบูรณ์จำนวนกี่รูปที่มี $c ≤ {10}^{16}$ โดยไม่เป็นแบบ "สมบูรณ์มาก"

# --hints--

`perfectRightAngledTriangles()` ต้องคืนค่าเป็น `0`

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
