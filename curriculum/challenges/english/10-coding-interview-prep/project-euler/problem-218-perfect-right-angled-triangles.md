---
id: 5900f4461000cf542c50ff59
title: 'Problem 218: Perfect right-angled triangles'
challengeType: 5
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

พิจารณาสามเหลี่ยมมุมฉากที่มีด้าน $a=7$, $b=24$ และ $c=25$

พื้นที่ของสามเหลี่ยมนี้คือ 84 ซึ่งหารด้วยเลขสมบูรณ์ 6 และ 28 ลงตัว

นอกจากนี้ มันคือสามเหลี่ยมมุมฉากดั้งเดิม เช่น $gcd(a,b) = 1$ และ $gcd(b,c) = 1$

นอกจากนี้ $c$ ยังเป็นกำลังสองสมบูรณ์

เราจะเรียกสามเหลี่ยมมุมฉากว่าสมบูรณ์ถ้า:

- เป็นรูปสามเหลี่ยมมุมฉากดั้งเดิม
- ด้านตรงข้ามมุมฉากเป็นกำลังสองสมบูรณ์

เราจะเรียกสามเหลี่ยมมุมฉากว่าสมบูรณ์แบบมากถ้า:

- เป็นรูปสามเหลี่ยมมุมฉากที่สมบูรณ์แบบ
- พื้นที่ของมันคือผลคูณของจำนวนเต็ม 6 และ 28

มีสามเหลี่ยมมุมฉากสมบูรณ์จำนวนกี่รูปที่มี $c ≤ {10}^{16}$ ที่ไม่สมบูรณ์แบบ

# --hints--

`perfectRightAngledTriangles()` ควร return `0`.

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
