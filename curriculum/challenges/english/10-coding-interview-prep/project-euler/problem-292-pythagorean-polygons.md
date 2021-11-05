---
id: 5900f4911000cf542c50ffa3
title: 'Problem 292: Pythagorean Polygons'
challengeType: 5
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

เราจะกำหนดรูปหลายเหลี่ยมพีทาโกรัสให้เป็นรูปหลายเหลี่ยมนูนที่มีคุณสมบัติดังต่อไปนี้:

- มีจุดยอดอย่างน้อยสามจุด
- ไม่มีจุดยอดสามจุดเรียงกัน
- แต่ละจุดยอดมีพิกัดจำนวนเต็ม
- ขอบแต่ละด้านมีความยาวเป็นจำนวนเต็ม

สำหรับจำนวนเต็มที่กำหนด $n$ ให้กำหนด $P(n)$ เป็นจำนวนรูปหลายเหลี่ยมพีทาโกรัสที่แตกต่างกัน ซึ่งเส้นรอบรูปคือ $≤ n$


รูปหลายเหลี่ยมพีทาโกรัสควรได้รับการพิจารณาให้แตกต่างออกไป ตราบใดที่ไม่มีการแปลของอีกรูปหนึ่ง

คุณจะได้รับ $P(4) = 1$, $P(30) = 3655$ and $P(60) = 891045$.

หา $P(120)$

# --hints--

`pythagoreanPolygons()` ควร return `3600060866`.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
